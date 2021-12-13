import React from "react";
import BlogData from "../../components/Blog/BlogData";
import Dashboard from "../../components/Dashboard";
import withSession from '../../lib/session'



function manage() {
  return (
    <Dashboard title="Manage Blog">
      <BlogData />
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


export default manage;
