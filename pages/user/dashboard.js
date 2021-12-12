import Head from "next/head";
import React from "react";
import Dashboard from "../../components/Dashboard";
function dashboard() {
  return (
    <Dashboard title="#Dashboard">
      <Head>
        <title>Dashboard</title>
      </Head>      
    </Dashboard>
  );
}

export default dashboard;
