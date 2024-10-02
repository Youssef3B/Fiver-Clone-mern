import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const FavoriteContext = createContext();

function FavoriteProvider({ children }) {
  const [AllFavorites, setAllFavorites] = useState("");

  async function getAllFavorites() {
    try {
      const res = await axios.get(`http://localhost:4500/api/favorites`);
      if (res) {
        setAllFavorites(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllFavorites();
  }, []);

  async function deleteFavorite(id) {
    try {
      const res = await axios.delete(
        `http://localhost:4500/api/favorites/${id}`
      );
      if (res) {
        toast.success("Favorite Service deleted successfully");
        getAllFavorites();
      }
    } catch (error) {
      toast.error("Failed to delete favorite service");
      console.log(error);
    }
  }

  return (
    <FavoriteContext.Provider
      value={{ AllFavorites, getAllFavorites, deleteFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export { FavoriteProvider, FavoriteContext };
