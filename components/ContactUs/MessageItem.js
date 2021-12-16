import axios from "axios";
import moment from "moment";
import React, { useRef, useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { answer_textarea } from "./styles.module.css";
function MessageItem({ email, message, date }) {
  const ref = useRef(null);
  const [state, setState] = useState(false);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await axios.post("/api/message/send", {
        message: ref.current.value.trim(),
        email,
      });
      Swal.fire({
        title: "Sent",
        text: "Your answer will sent",
        icon: "success",
      });
      setState(false);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "we have an error on server",
        icon: "error",
      });
    }
  };

  const handleClickShowModal = () => {
    setState(true);
  };

  const handleClickCloseModal = () => {
    setState(false);
  };
  return (
    <>
      <Modal isOpen={state}>
        <p>{message}</p>
        <form onSubmit={handleSubmitForm}>
          <textarea ref={ref} className={answer_textarea}></textarea>
          <button className="btn btn-success">Send</button> &nbsp;
          <button
            onClick={handleClickCloseModal}
            className="btn btn-danger"
            type="button"
          >
            close
          </button>
        </form>
      </Modal>
      <tr>
        <td>{email}</td>
        <td>{message}</td>
        <td>{moment.unix(date).format("MM/DD/YYYY h:m")}</td>
        <td>
          <button onClick={handleClickShowModal} className="btn btn-warning">
            answer
          </button>
        </td>
      </tr>
    </>
  );
}

export default MessageItem;
