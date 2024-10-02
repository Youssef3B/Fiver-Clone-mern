import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CommentContext } from "../../contexts/CommentContext";
import { Link } from "react-router-dom";

function CommentsCard({ comment }) {
  const { deleteComment } = useContext(CommentContext);
  const id = localStorage.getItem("userId");
  const fullPath = String(comment?.user?.avatar);

  const pathParts = fullPath.split("\\");
  const desiredPath = pathParts.slice(-2).join("\\");
  return (
    <div className="bg-white border border-zinc-300 shadow-lg rounded-lg p-4 my-6 relative">
      <Link to={`/profile/${comment?.user?._id}`}>
        <div className="flex items-center space-x-3">
          <div>
            <img
              className="h-20 w-20 rounded-full object-cover object-center"
              src={`../${desiredPath}`}
              alt=""
            />
          </div>
          <div>
            <h4 className="text-md font-semibold">
              {comment?.user?.firstName} {comment?.user?.lastName}
            </h4>
            <p className="font-sm text-zinc-600">{comment?.user?.city}</p>
          </div>
        </div>
      </Link>

      <p className="my-5">{comment?.description}</p>
      {comment?.user?._id === id && (
        <div
          onClick={() => deleteComment(comment?._id)}
          className="absolute top-4 right-4 bg-red-500 flex items-center justify-center rounded-full h-8 w-8 text-white cursor-pointer"
        >
          <MdDelete />
        </div>
      )}
    </div>
  );
}
export default CommentsCard;
