import React from "react";

const Message = ({ onGetPosts }) => {
  return (
    <div className="message">
      <center>
        <h1>There is no post yet...</h1>
        <button type="button" className="btn btn-primary" onClick={onGetPosts}>
          Get Posts from Server
        </button>
      </center>
    </div>
  );
};

export default Message;
