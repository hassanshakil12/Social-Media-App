import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { PostList as PostListData } from "../store/post-list-store";
import Message from "./Message";
import Spinner from "./Spinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <Spinner />}
      {!fetching && postList.length === 0 && <Message />}
      {!fetching && postList.map((post, index) => <Card key={index} post={post} />)}
    </>
  );
};

export default PostList;
