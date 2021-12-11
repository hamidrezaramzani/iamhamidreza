import React from "react";
import { login, login_form, error_message } from "./styles.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

function index() {
  const schema = yup.object().shape({
    username: yup.string().required("it can not be empty"),
    password: yup
      .string()
      .required("it can not be empty")
      .min(6, "Must have at least 6 characters"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (values) => {
    console.log(values);
  };
  return (
    <div className={login}>
      <img
        src="/images/banner.webp"
        alt="alien logo"
        width={150}
        height={240}
      />
      <div className={login_form}>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <h1>Admin Login</h1>
          <input
            type="text"
            name="username"
            {...register("username")}
            placeholder="Username"
          />
          <span className={error_message}>{errors.username?.message}</span>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <span className={error_message}>{errors.password?.message}</span>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default index;
