import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { CommentContext } from "../../contexts/CommentContext";

function PostComment() {
  const { getAllComments } = useContext(CommentContext);
  const [description, setComment] = useState("");
  const user = localStorage.getItem("userId");
  const { id } = useParams();
  const service = id;
  async function handleSubmit(e) {
    e.preventDefault();
    const data = { user, service, description };
    try {
      const res = await axios.post(
        `http://localhost:4500/api/commentsService`,
        data
      );
      if (res) {
        console.log("comment has been submitted");
        toast.success("Comment has been created");
        setComment("");
        getAllComments();
      }
    } catch (error) {
      toast.error("Your comment has mot been submitted");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
        <div className="px-4 py-2 bg-white rounded-t-lg">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows={4}
            className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:outline-none"
            placeholder="Write a comment..."
            required=""
            value={description}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t">
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-green-200"
          >
            Post comment
          </button>
        </div>
      </div>
    </form>
  );
}
export default PostComment;
