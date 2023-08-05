import { createContext, useState } from "react";

export const postsListContext = createContext({
  postsList: [],
  setPostsList: () => {},
});

export const PostsListProvider = ({ children }) => {
  const [postsList, setPostsList] = useState([]);

  const value = { postsList, setPostsList };

  return (
    <postsListContext.Provider value={value}>
      {children}
    </postsListContext.Provider>
  );
};
