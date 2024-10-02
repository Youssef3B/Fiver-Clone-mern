import { useContext, useEffect, useState } from "react";
import FavoriteCard from "../components/ListOfFavorite/FavoriteCard";
import { FavoriteContext } from "../contexts/FavoritContext";
import { Link } from "react-router-dom";

function ListOfFavorite() {
  const { AllFavorites } = useContext(FavoriteContext);
  const [filteredFavorite, setFilteredFavorite] = useState([]);
  const id = localStorage.getItem("userId");

  useEffect(() => {
    async function filterFavorite() {
      if (Array.isArray(filteredFavorite)) {
        const filter = AllFavorites.filter(
          (favorite) => favorite.user._id === id
        );
        setFilteredFavorite(filter.reverse());
      } else {
        console.log("somthing went error");
      }
    }
    filterFavorite();
  }, [AllFavorites, id]);

  return (
    <div className="px-64 my-24">
      <h3 className="text-3xl font-bold">List Of My Favorite Services</h3>
      <div className="grid grid-cols-3 gap-8">
        {Array.isArray(filteredFavorite) &&
          filteredFavorite.map((favorite, index) => (
            <Link to={`/servicesDetail/${favorite.service._id}`} key={index}>
              <FavoriteCard favorite={favorite} />
            </Link>
          ))}
      </div>
    </div>
  );
}
export default ListOfFavorite;
