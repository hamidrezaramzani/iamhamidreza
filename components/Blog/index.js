import React from "react";
import { blog, blog_items } from "./styles.module.css";
import Title from "../Title";
import BlogItem from "./BlogItem";
import { useLoadData, useRenderData, useTranslation } from "../hooks";
function Blog() {
  const { state, loading } = useLoadData("/api/blog/all");
  const renderData = useRenderData(BlogItem, loading, state);
  const t = useTranslation();
  return (
    <div className={blog}>
      <Title titleText={`#${t("blogs")}`} description={t("blog_description")} />
      <div className={blog_items}>{renderData()}</div>
    </div>
  );
}

export default Blog;
