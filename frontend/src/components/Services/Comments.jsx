import { useContext, useEffect, useState } from "react";
import CommentsCard from "./CommentsCard";
import PostComment from "./PostComment";
import { CommentContext } from "../../contexts/CommentContext";
import { useParams } from "react-router-dom";

function Comments() {
  const { AllComments } = useContext(CommentContext);
  const [filteredComments, setFilteredComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function filterComments() {
      if (Array.isArray(AllComments)) {
        const filter = AllComments.filter(
          (service) => service.service._id === id
        );
        setFilteredComments(filter.reverse());
        console.log(filter);
      } else {
        console.error("AllComments is not an array:", AllComments);
      }
    }

    filterComments();
  }, [AllComments, id]); // Add AllComments and id as dependencies

  return (
    <div className="my-6">
      <h3 className="text-3xl font-bold">Comments</h3>
      <PostComment />
      <div className="my-5">
        {filteredComments &&
          filteredComments.map((comment, index) => (
            <CommentsCard key={index} comment={comment} />
          ))}
      </div>
    </div>
  );
}

export default Comments;
