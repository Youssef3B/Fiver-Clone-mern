import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { FavoriteContext } from "../../contexts/FavoritContext";

function FavoriteCard({ favorite }) {
  const fullPath = String(favorite?.service?.user?.avatar);

  const pathParts = fullPath.split("\\");
  const desiredPath = pathParts.slice(-2).join("\\");
  const fullPath2 = String(favorite?.service?.images[0]);

  const pathParts2 = fullPath2.split("\\");
  const desiredPath2 = pathParts2.slice(-2).join("\\");
  const { deleteFavorite } = useContext(FavoriteContext);

  async function handleSubmit(e) {
    e.preventDefault();
    deleteFavorite(favorite?._id);
  }
  return (
    <div className="rounded-lg bg-white shadow-md my-7 border border-zinc-300">
      <div className="relative">
        <div
          onClick={handleSubmit}
          className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex justify-center items-center transition-all hover:bg-red-500 cursor-pointer hover:text-white"
        >
          <MdDelete />
        </div>
        <img
          className="w-full rounded-t-lg h-60 object-cover"
          src={`../${desiredPath2}`}
          alt=""
        />
      </div>
      <div className="py-4 px-6">
        <h2 className="text-xl font-bold mb-2">{favorite?.service?.title} </h2>
        <p className="text-sm">{favorite?.service?.description}</p>
        <div className="flex items-center my-4 space-x-3">
          <img
            className="h-14 w-14 rounded-full object-cover items-center"
            src={`../${desiredPath}`}
            alt=""
          />
          <div>
            <h5 className="font-semibold">
              {favorite?.service?.user?.firstName}{" "}
              {favorite?.service?.user?.lastName}
            </h5>
            <p className="text-sm">{favorite?.user?.city}</p>
            <p className="text-sm text-zinc-600">Consulting</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FavoriteCard;
