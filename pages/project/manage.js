import React, { useContext } from "react";
import Dashboard from "../../components/Dashboard";
import withSession from "../../lib/session";
import { useLoadData, useRenderData } from "../../components/hooks";
import ProjectItem from "../../components/Projects/ManageProjectItem";
import { fetchData } from "../../context/actions/projectsActions";
import { ProjectsContext } from "../../context/providers/ProjectsPorvider";

function Manage() {
  const { loading } = useLoadData("/api/project/all", (data) => {
    dispatch(fetchData(data));
  });
  const { state, dispatch } = useContext(ProjectsContext);

  const renderData = useRenderData(ProjectItem, loading, state);
  return (
    <Dashboard title="Manage Project">
      <div className="responsive-table">
        <table>
          <thead>
            <tr>
              <td>title</td>
              <td>description</td>
              <td>image</td>
              <td>date</td>
              <td>link</td>
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
