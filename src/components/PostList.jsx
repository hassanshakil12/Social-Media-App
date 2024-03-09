import React, { useContext, useState } from "react";
import Card from "./Card";
import { PostList as PostListData } from "../store/post-list-store";
import Message from "./Message";

const PostList = () => {
  const { postList, addPosts} = useContext(PostListData);
  const [dataFetched, setDataFetched] = useState(false)

  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addPosts(data.posts));
      setDataFetched(true)
  }

  const handleGetPosts=()=>{
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addPosts(data.posts));
  }

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
