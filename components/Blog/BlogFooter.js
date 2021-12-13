import React from "react";
import { blog_footer, blog_like_button } from "./styles.module.css";
import { FiHeart } from "react-icons/fi";
function BlogFooter({likes}) {
  return (
    <div className={blog_footer}>
      <button className={blog_like_button}>
        <FiHeart />
        &nbsp; {likes}
      </button>
    </div>
  );
}

export default BlogFooter;
