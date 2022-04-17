import React, { useContext } from "react";
import Dashboard from "../../components/Dashboard";
import withSession from "../../lib/session";
import { useLoadData, useRenderData } from "../../components/hooks";
import BlogManageItem from "../../components/Blog/BlogManageItem";
import { loadData } from "../../context/actions/blogActions";
import { BlogsContext } from "../../context/providers/BlogsProvider";

function Manage() {
  const { loading } = useLoadData("/api/blog/all", (data) => {
    console.log(data);
    dispatch(loadData(data));
  });
  const { state, dispatch } = useContext(BlogsContext);

  const renderData = useRenderData(BlogManageItem, loading, state);
  return (
    <Dashboard title="Manage Blog">
      <div className="responsive-table">
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
      </div>
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
