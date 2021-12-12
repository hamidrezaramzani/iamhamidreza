import React from "react";
import { useRouter } from "next/router";
import { login, login_form, error_message } from "./styles.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import axios from "axios";
function Login() {
  const router = useRouter();
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

  const handleSubmitForm = async (values) => {    
    try {
      await axios.post("/api/user/login", values);
      router.push("/user/dashboard");
    } catch (error) {
      if (error.response.status == 401) {
        Swal.fire({
          title: "Error",
          text: "Username or password is invalid",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "We have an error in the server",
          icon: "error",
        });
      }
    }
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

export default Login;
