import React, { useState } from "react";
import moment from "moment";
import { active, deactive } from "./styles.module.css";
import parser from "html-react-parser";
import Modal from "react-modal";
function BlogManageItem({
  id,
  title,
  content,
  description,
  status,
  date,
  image,
}) {
  const [state, setState] = useState(false);
  const [imageModal,setImageModal] = useState(false);
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
    setState(true);
  };

  const handleClickCloseContentModal = () => {
    setState(false);
  };

  
  const handleClickShowImageModal = () => {
    setImageModal(true);
  };

  const handleClickCloseImageModal = () => {
    setImageModal(false);
  };

  return (
    <>
      <Modal isOpen={state} style={customStyles} contentLabel="Show Content">
        {parser(content)}
        <button onClick={handleClickCloseContentModal}>Close</button>
      </Modal>

      <Modal isOpen={imageModal} style={customStyles} contentLabel="Show Image">
        <img src={image} alt={title} />
        <button onClick={handleClickCloseImageModal}>Close</button>
      </Modal>
      <tr key={id}>
        <td>{title}</td>
        <td>{description}</td>
        <td>
          <button onClick={handleClickShowContentModal}>show content</button>
        </td>
        <td>
          <button onClick={handleClickShowImageModal}>show image</button>
        </td>
        <td>{moment.unix(date).format("MM/DD/YYYY h:m")}</td>
        <td>
          <button>Delete</button>
          &nbsp;
          <button className={`${status == 1 ? active : deactive}`}>
            {status == 1 ? "Active" : "DeActive"}
          </button>
        </td>
      </tr>
    </>
  );
}

export default BlogManageItem;
