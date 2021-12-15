import React from "react";
import moment from "moment";
function ManageProjectItem({ title, description, date, image, link }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td><a href={image} className="btn btn-warning">Show Image</a></td>
      <td>{link}</td>
      <td>{moment.unix(date).format("MM/DD/YYYY h:m")}</td>
      <td>
        <button className={"btn btn-danger"}>Delete</button>
      </td>
    </tr>
  );
}

export default ManageProjectItem;
