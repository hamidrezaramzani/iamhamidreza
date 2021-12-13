import React, { useEffect, useState } from "react";
import { blog, blog_items, blog_item } from "./styles.module.css";
import Title from "../Title";
import BlogItem from "./BlogItem";
import axios from "axios";
import Loading from "../Loading";
function Blog() {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get("/api/blog/all");
        setState(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  const renderBlogs = () => {
    if (state == null) return <Loading />;

    if (state.length) {
      return state.map((item, index) => (
        <BlogItem {...item} key={item.id} reverse={index / 2 == 0} />
      ));
    }
  };
  return (
    <div className={blog}>
      <Title titleText={"#blog"} description={"Read more about me"} />
      <div className={blog_items}>{renderBlogs()}</div>
    </div>
  );
}

export default Blog;
