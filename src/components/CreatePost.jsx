import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, title, body, reactions, tags);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "2vw",
        width: "500px",
        border: "1px solid #D2D2D2",
        borderRadius: "6px",
        padding: "20px",
      }}
    >
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter User-Id:
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter 'User-Id' Here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">
          Enter Title:
        </label>
        <input
          ref={titleElement}
          type="text"
          className="form-control"
          id="postTitle"
          placeholder="Enter 'Post Title' Here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">
          Enter Body:
        </label>
        <textarea
          ref={bodyElement}
          rows={5}
          type="text"
          className="form-control"
          id="postBody"
          placeholder="Enter 'Post Body' Here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Enter Reactions:
        </label>
        <input
          ref={reactionsElement}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="Enter 'Post Reactions' Here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Tags:
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter 'Post Tags' Here"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
