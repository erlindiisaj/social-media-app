import { createContext, useState } from "react";

export const userPosts = createContext({
  postsList: [],
  setPostsList: () => {},
});

export const UserPostsProvider = ({ children }) => {
  const [postsList, setPostsList] = useState([]);
  const value = { postsList, setPostsList };

  return <userPosts.Provider value={value}>{children}</userPosts.Provider>;
};
