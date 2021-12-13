import React from "react";
import Dashboard from "../../components/Dashboard";
import NewProjectForm from "../../components/Projects/NewProjectForm";


function newProject() {
  return (
    <Dashboard title="New Project">
      <NewProjectForm />
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

export default newProject;
