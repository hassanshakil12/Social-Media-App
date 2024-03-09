import React, { useContext } from "react";
import Card from "./Card";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => 
        <Card key={post.id} post={post} />
      )}
    </>
  );
};

export default PostList;
