import { useContext, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { MdEdit, MdDelete } from "react-icons/md";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FavoriteContext } from "../../contexts/FavoritContext";

function ServiceCard({ service, deleteServiceFromHisId }) {
  const fullPath = String(service.images[0]);
  const pathParts = fullPath.split("\\");
  const desiredPath = pathParts.slice(-2).join("\\");

  const fullPath2 = String(service?.user?.avatar);
  const pathParts2 = fullPath2.split("\\");
  const desiredPath2 = pathParts2.slice(-2).join("\\");

  const { user } = useContext(UserContext);
  const { AllFavorites, getAllFavorites, deleteFavorite } =
    useContext(FavoriteContext);
  const [filteredFavorite, setFilteredFavorite] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null); // Store the favorite ID
  const id = localStorage.getItem("userId");

  useEffect(() => {
    async function filterFavorite() {
      if (Array.isArray(AllFavorites)) {
        const filter = AllFavorites.filter(
          (favorite) => favorite.user._id === id
        );
        setFilteredFavorite(filter.reverse());
      } else {
        console.log("Something went wrong");
      }
    }
    filterFavorite();
  }, [AllFavorites, id]);

  useEffect(() => {
    // Check if the service is already in favorites
    const favorite = filteredFavorite.find(
      (favorite) => favorite.service._id === service._id
    );
    if (favorite) {
      setIsFavorite(true);
      setFavoriteId(favorite._id); // Store the favorite ID
    } else {
      setIsFavorite(false);
      setFavoriteId(null);
    }
  }, [filteredFavorite, service._id]);

  const handleDeleteClick = (event) => {
    event.preventDefault();

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (confirmDelete) {
      deleteServiceFromHisId(service?._id);
    }
  };

  async function handleFavoriteClick(e) {
    e.preventDefault();
    if (isFavorite) {
      try {
        await deleteFavorite(favoriteId);
        toast.success("Removed from favorites successfully");
        getAllFavorites();
      } catch (error) {
        toast.error("Failed to remove from favorites");
        console.log(error);
      }
    } else {
      const data = {
        user: localStorage.getItem("userId"),
        service: service?._id,
      };
      try {
        const res = await axios.post(
          `http://localhost:4500/api/favorites`,
          data
        );
        if (res) {
          toast.success("Added to favorites successfully");
          getAllFavorites();
        }
      } catch (error) {
        toast.error("Failed to add to favorites");
        console.log(error);
      }
    }
  }

  return (
    <div className="my-5 border rounded-lg border-slate-700 p-6 grid grid-cols-7 gap-6 relative border-opacity-30">
      <div className="col-span-3">
        <img
          className="w-full h-56 object-cover object-center rounded-lg shadow-md"
          src={`../${desiredPath}`}
          alt=""
        />
      </div>
      <div className="col-span-4">
        <div className="flex space-x-3">
          <img
            className="h-16 w-16 object-cover rounded-full"
            src={`../${desiredPath2}`}
            alt="author"
          />
          <div>
            <h5 className="font-semibold text-sm text-green-500">
              {service?.user?.firstName} {service?.user?.lastName}
            </h5>
            <h4 className="font-bold text-md text-black">
              {service?.user?.category}
            </h4>
            <p className="text-gray-700 font-semibold text-sm">
              {service?.user?.city}
            </p>
          </div>
        </div>
        <h3 className="my-3 font-bold text-xl">{service?.title}</h3>
        <p className="text-sm text-gray-600 font-semibold">
          {service?.description}
        </p>
      </div>
      {user?._id === service?.user?._id ? (
        <>
          <div
            onClick={handleDeleteClick}
            className="absolute w-8 h-8 bg-white border-black border border-opacity-65 right-2 top-2 text-red-500  rounded-full flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-white hover:border-none transition-al"
          >
            <MdDelete size={22} />
          </div>
          <Link to={`/editService/${service?._id}`}>
            <div className="absolute w-8 h-8 bg-white border-black border border-opacity-65 right-12 top-2 text-green-500  rounded-full flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-white hover:border-none transition-al">
              <MdEdit size={22} />
            </div>
          </Link>
        </>
      ) : (
        <div
          onClick={handleFavoriteClick}
          className={`absolute w-8 h-8 border-black border border-opacity-65 right-2 top-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-green-500 ${
            isFavorite ? "bg-green-500 text-white border-none" : ""
          }`}
        >
          <CiHeart size={22} />
        </div>
      )}
    </div>
  );
}

export default ServiceCard;
