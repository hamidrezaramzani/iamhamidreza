import React from "react";
import { contact_us, contact_us_form } from "./styles.module.css";
import Title from "../Title";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import Swal from "sweetalert2";
import axios from "axios";
import AnimatedItems from "../AnimatedItems";
import { CONTACT_US } from "../../constants";
import { useTranslation } from "../hooks";
function ContactUs() {
  const t = useTranslation();
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
      <Title titleText={`#${t("contact")}`} description={t("contact_description")} />
      <span>{t("contact_description2")}</span>
      <AnimatedItems data={CONTACT_US} />
      <div className={contact_us_form}>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <input
            {...register("email")}
            type="text"
            name="email"
            placeholder={t("email_placeholder")}
          />

          <span className="error-label">{errors.email?.message}</span>
          <textarea
            {...register("message")}
            placeholder={t("text_placeholder")}
            name="message"
          ></textarea>
          <span className="error-label">{errors.message?.message}</span>
          <button>{t("contact_button")}</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
