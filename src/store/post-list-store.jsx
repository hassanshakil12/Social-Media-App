import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_LIST
  );
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
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_LIST = [
  {
    id: "1",
    title: "Traveling to Skardu",
    body: "I'm about to visit Skardu for my summer trip hope to enjoy there, Peace out",
    userId: "45",
    tags: ["traveling", "summer", "vacations"],
    reactions: 56,
  },
  {
    id: "2",
    title: "Graduation Completed",
    body: "It's hard to believe that I have completed my graduation with flying colors. Happy 😀",
    userId: "5",
    tags: ["study", "graduation", "convocation"],
    reactions: 12,
  },
];

export default PostListProvider;
