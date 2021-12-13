import Head from "next/head";
import React from "react";
import Dashboard from "../../components/Dashboard";
import withSession from '../../lib/session'

function dashboard() {
  return (
    <Dashboard title="#Dashboard">
      <Head>
        <title>Dashboard</title>
      </Head>      
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

export default dashboard;
