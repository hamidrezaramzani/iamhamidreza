import React from "react";
import Dashboard from "../../components/Dashboard";

import NewBlogForm from "../../components/Blog/NewBlog";

function newBlog() {
  return (
    <Dashboard title="New Blog">
      <NewBlogForm />
    </Dashboard>
  );
}

export const getServerSideProps = withSession(async function ({ req }) {
  const user = req.session.get("user");
  if (!user) {
    return {
      redirect: {
        destination: "/user/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
});

export default newBlog;
