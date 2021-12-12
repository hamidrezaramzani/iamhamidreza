import React from "react";
import LoginBox from "../../../components/Login";
import withSession from "../../../lib/session";
function index({ user }) {
  return (
    <>
      <LoginBox />
    </> 
  );
}

export const getServerSideProps = withSession(async function ({ req }) {
  const user = req.session.get("user");
  console.log(user);
  if (user) {
    return {
      redirect: {
        destination: "/admin/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
});
export default index;
