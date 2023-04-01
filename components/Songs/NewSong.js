import React from "react";
import { new_project } from "./styles.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
function NewSongForm() {
  const schema = yup.object().shape({
    title: yup.string().required("it can not be empty"),
    description: yup.string().required("it can not be empty"),
    image: yup.string().required("it can not be empty"),
    link: yup.string().required("it can not be empty"),
  });

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (values) => {
    try {
      await axios.post("/api/song/new" ,values);
      router.push("/song/manage");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "we have an error in the server",
        icon: "error",
      });
    }
  };

  return (
    <div className={new_project}>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className={"input"}
          {...register("title")}
        />
        <span className="error-label">{errors.title?.message}</span>

        <input
          type="text"
          name="description"
          placeholder="Description"
          className={"input"}
          {...register("description")}
        />
        <span className="error-label">{errors.description?.message}</span>
        <input
          type="text"
          name="image"
          placeholder="Image Url"
          className={"input"}
          {...register("image")}
        />
        <span className="error-label">{errors.image?.message}</span>


        <input
          type="text"
          name="link"
          placeholder="Song Link"
          className={"input"}
          {...register("link")}
        />
        <span className="error-label">{errors.link?.message}</span>
        <button className="button">New</button>
      </form>
    </div>
  );
}

export default NewSongForm;
