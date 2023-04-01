import React from "react";
import Dashboard from "../../components/Dashboard";
import NewSongForm from "../../components/Songs/NewSong";
import withSession from "../../lib/session";
function newProject() {
  return (
    <Dashboard title="New Song">
      <NewSongForm />
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
