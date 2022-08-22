import React from "react";
import Dashboard from "../../components/Dashboard";
import NewExperience from "../../components/Exprience/NewExperience";
import withSession from '../../lib/session'
function newExperience() {
  return (
    <Dashboard title="New Experience">
      <NewExperience />
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

export default newExperience;
