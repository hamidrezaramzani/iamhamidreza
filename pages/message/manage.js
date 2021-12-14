import React from "react";
import Dashboard from "../../components/Dashboard";
import { useLoadData, useRenderData } from "../../components/hooks";
import MessageItem from "../../components/ContactUs/MessageItem";
import withSession from "../../lib/session";
function Manage() {
  const { state, loading } = useLoadData("/api/message/all");
  const renderData = useRenderData(MessageItem, loading, state);
  return (
    <Dashboard title="Manage Messages">
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Message</th>
            <th>Date and Time</th>
            <th>Mange</th>
          </tr>
        </thead>

        <tbody>{renderData()}</tbody>
      </table>
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

export default Manage;
