import React from "react";
import { contact_us, contact_us_form } from "./styles.module.css";
import Title from "../Title";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import Swal from "sweetalert2";
import axios from "axios";
function ContactUs() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("please enter your email")
      .email("please enter a valid email"),
    message: yup.string().required("please enter your message"),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (values) => {
    try {
      await axios.post("/api/message/new", values);
      Swal.fire({
        title: "Success",
        text: "Your message sent",
        icon: "success",
      });
      reset();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "we have an error on server",
        icon: "error",
      });
    }
  };
  return (
    <div className={contact_us}>
      <Title titleText={"#ContactUs"} description={"Get in touch with me"} />
      <div className={contact_us_form}>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <input
            {...register("email")}
            type="text"
            name="email"
            placeholder="Type your email"
          />

          <span className="error-label">{errors.email?.message}</span>
          <textarea
            {...register("message")}
            placeholder="Type your text"
            name="message"
          ></textarea>
          <span className="error-label">{errors.message?.message}</span>
          <button>GET IN TOUCH</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
