import React from "react";
import { blog, blog_items, blog_item } from "./styles.module.css";
import Title from "../Title";
import BlogItem from "./BlogItem";
function index() {
  return (
    <div className={blog}>
      <Title titleText={"#blog"} description={"See more of me"} />
      <div className={blog_items}>
        <BlogItem reverse={false} />
        <BlogItem reverse={true} />
        <BlogItem reverse={false} />
        <BlogItem reverse={true} />
      </div>
    </div>
  );
}

export default index;
