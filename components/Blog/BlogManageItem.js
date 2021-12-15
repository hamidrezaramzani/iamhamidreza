import React, { useState, useContext } from "react";
import moment from "moment";
import { active, deactive } from "./styles.module.css";
import parser from "html-react-parser";
import Modal from "react-modal";
import Swal from "sweetalert2";
import axios from "axios";
import { BlogsContext } from "../../context/providers/BlogsProvider";
import { changeStatus, removeItem } from "../../context/actions/blogActions";
function BlogManageItem({
  id,
  title,
  content,
  description,
  status,
  date,
  image,
}) {
  const { dispatch } = useContext(BlogsContext);
  const [showContentModal, setShowContentModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleClickShowContentModal = () => {
    setShowContentModal(true);
  };

  const handleClickCloseContentModal = () => {
    setShowContentModal(false);
  };

  const handleClickShowImageModal = () => {
    setShowImageModal(true);
  };

  const handleClickCloseImageModal = () => {
    setShowImageModal(false);
  };

  const handleClickDeleteBlog = async () => {
    try {
      await axios.get(`/api/blog/delete/${id}`);
      dispatch(removeItem(id));
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "we have an error on server",
        icon: "error",
      });
    }
  };

  const renderByStatus = (texts) => {
    return texts[status];
  };

  const handleClickChangeStatus = async () => {
    try {
      const { data } = await axios.get(
        `/api/blog/change-status/${id}/${status}`
      );
      dispatch(changeStatus(id, data.status));
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "we have an error on server",
        icon: "error",
      });
    }
  };
  return (
    <>
      <Modal
        isOpen={showContentModal}
        style={customStyles}
        contentLabel="Show Content"
      >
        {parser(content)}
        <button onClick={handleClickCloseContentModal}>Close</button>
      </Modal>

      <Modal
        isOpen={showImageModal}
        style={customStyles}
        contentLabel="Show Image"
      >
        <img src={image} alt={title} />
        <button onClick={handleClickCloseImageModal}>Close</button>
      </Modal>
      <tr key={id}>
        <td>{title}</td>
        <td>{description}</td>
        <td>
          <button
            className="btn btn-warning"
            onClick={handleClickShowContentModal}
          >
            show content
          </button>
        </td>
        <td>
          <button
            className="btn btn-warning"
            onClick={handleClickShowImageModal}
          >
            show image
          </button>
        </td>
        <td>{moment.unix(date).format("MM/DD/YYYY h:m")}</td>
        <td>
          <button className={"btn btn-danger"} onClick={handleClickDeleteBlog}>
            Delete
          </button>
          &nbsp;&nbsp;
          <button
            onClick={handleClickChangeStatus}
            className={`${renderByStatus([
              "btn btn-danger",
              "btn btn-success",
            ])}`}
          >
            {renderByStatus(["InActive", "Active"])}
          </button>
        </td>
      </tr>
    </>
  );
}

export default BlogManageItem;
