import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Card = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card" style={{ width: "20rem", margin: "2vw" }}>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deletePost(post.id)}
      >
        <MdDeleteOutline />
      </span>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary tags">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          This post is reacted by {post.reactions} peoples
        </div>
      </div>
    </div>
  );
};

export default Card;
