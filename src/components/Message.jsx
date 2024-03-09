import React from "react";

const Message = () => {
  return (
    <div className="message">
      <center>
        <h1>There is no post yet...</h1>
        <button type="button" className="btn btn-primary">
          Get Posts from Server
        </button>
      </center>
    </div>
  );
};

export default Message;
