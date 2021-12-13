import React from "react";
import { blog_content } from "./styles.module.css";
import parser from "html-react-parser";
function BlogContent({ content }) {
  return <div className={blog_content}>{parser(content)}</div>;
}

export default BlogContent;
