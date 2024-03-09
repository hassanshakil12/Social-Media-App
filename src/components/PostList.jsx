import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { PostList as PostListData } from "../store/post-list-store";
import Message from "./Message";
import Spinner from "./Spinner";

const PostList = () => {
  const { postList, addPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <Spinner />}
      {!fetching && postList.length === 0 && <Message />}
      {!fetching && postList.map((post) => <Card key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
