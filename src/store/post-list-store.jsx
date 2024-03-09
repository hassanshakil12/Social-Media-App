import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPosts: () => {},
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (userId, title, body, reactions, tags) => {
    // console.log(`${userId} ${title} ${body} ${reactions} ${tags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now,
        title: title,
        body: body,
        userId: userId,
        tags: tags,
        reactions: reactions,
      },
    });
  };

  const addPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    // console.log(`Deleted product's ID is ${postId}`);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPosts, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
