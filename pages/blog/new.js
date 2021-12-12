import React from "react";
import Dashboard from "../../components/Dashboard";

import NewBlogForm from '../../components/Blog/NewBlog'

function newBlog() {
  return (
    <Dashboard title="New Blog">
      <NewBlogForm />
    </Dashboard>
  );
}

export default newBlog;
