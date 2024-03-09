import React, { useContext } from "react";
import Card from "./Card";
import { PostList as PostListData } from "../store/post-list-store";
import Message from "./Message";

const PostList = () => {
  const { postList, addPosts} = useContext(PostListData);

  const handleGetPosts = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((item)=>addPosts(item.posts));
  };

  return (
    <>
      {postList.length === 0 && <Message onGetPosts={handleGetPosts} />}
      {postList.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
