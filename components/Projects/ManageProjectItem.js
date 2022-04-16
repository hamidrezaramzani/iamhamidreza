import React, { useContext } from "react";
import moment from "moment";
import Swal from "sweetalert2";
import axios from "axios";
import { ProjectsContext } from "../../context/providers/ProjectsPorvider";
import { removeItem } from "../../context/actions/projectsActions";

function ManageProjectItem({ _id, title, description, date, image, link }) {
  const { dispatch } = useContext(ProjectsContext);
  const handleClickDeleteProject = async () => {
    try {
      await axios.post(`/api/project/delete/${_id}`);
      dispatch(removeItem(_id))
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "We have an error on server",
        icon: "error",
      });
    }
  };
  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <a href={image} className="btn btn-warning">
          Show Image
        </a>
      </td>
      <td>{link}</td>
      <td>{moment.unix(date).format("MM/DD/YYYY h:m")}</td>
      <td>
        <button onClick={handleClickDeleteProject} className={"btn btn-danger"}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ManageProjectItem;
