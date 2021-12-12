import React from "react";
import BlogData from "../../components/Blog/BlogData";
import Dashboard from "../../components/Dashboard";



function manage() {
  return (
    <Dashboard title="Manage Blog">
      <BlogData />
    </Dashboard>
  );
}

export default manage;
