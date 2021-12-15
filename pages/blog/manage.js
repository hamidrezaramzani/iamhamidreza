import React from "react";
import Dashboard from "../../components/Dashboard";
import withSession from "../../lib/session";
import { useLoadData, useRenderData } from "../../components/hooks";
import BlogManageItem from "../../components/Blog/BlogManageItem";
function Manage() {
  const { state, loading } = useLoadData("/api/blog/all");
  const renderData = useRenderData(BlogManageItem, loading, state);
  return (
    <Dashboard title="Manage Blog">
      <table>
        <thead>
          <tr>
            <td>title</td>
            <td>description</td>
            <td>content</td>
            <td>image</td>
            <td>date</td>
            <td>manage</td>
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
