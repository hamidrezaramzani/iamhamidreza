import React from "react";
import { blog_content, blog_box, blog_text } from "./styles.module.css";
import parser from "html-react-parser";
import BlogHeader from "./BlogHeader";
import BlogComments from "./BlogComments";
function BlogContent({ content, id,comments ,  ...props }) {
  return <div className={blog_content}>
    <div className={blog_box}>
      <BlogHeader {...props} />

      <div className={blog_text}>
        {parser(content)}
      </div>

      <BlogComments id={id} comments={comments} />
    </div>
  </div>;
}

export default BlogContent;
