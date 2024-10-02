import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CommentContext = createContext();

function CommentProvider({ children }) {
  const [AllComments, setAllComments] = useState("");
  async function getAllComments() {
    try {
      const res = await axios.get(`http://localhost:4500/api/commentsService`);
      if (res) {
        setAllComments(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllComments();
  }, []);

  async function deleteComment(id) {
    try {
      const res = await axios.delete(
        `http://localhost:4500/api/commentsService/${id}`
      );
      if (res) {
        console.log(res);
        toast.success("Comment deleted successfully");
        getAllComments();
      }
    } catch (error) {
      console.log(error);
      toast.error("Error deleting comment");
    }
  }
  return (
    <CommentContext.Provider
      value={{ AllComments, getAllComments, deleteComment }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export { CommentContext, CommentProvider };
