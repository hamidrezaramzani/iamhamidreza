import React, { useReducer } from "react";
import blogReducer from "../reducers/blogReducer";
export const BlogsContext = React.createContext();

const initialState = [];
const BlogsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState)
  return (
    <BlogsContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogsContext.Provider>
  );
};

export default BlogsProvider;
