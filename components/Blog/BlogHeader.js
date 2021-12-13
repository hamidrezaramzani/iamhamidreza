import React from "react";
import { header, blog_info, blog_image } from "./styles.module.css";
function BlogHeader({ title, description, image }) {
  return (
    <div className={header}>
      <div className={blog_info}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={blog_image}>
        <img src={image} width={300} alt="blog data" />
      </div>
    </div>
  );
}

export default BlogHeader;
