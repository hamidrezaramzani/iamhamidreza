import React, { useState } from "react";
import { input, error_label, button } from "./styles.module.css";
import { EditorState, convertToRaw } from "draft-js";
import dynamic from "next/dynamic";
import draftToHtml from "draftjs-to-html";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";

function NewBlog() {
  const router = useRouter();
  const [state, setState] = useState({
    editorState: EditorState.createEmpty(),
  });

  const onEditorStateChange = (editorState) => {
    setState({ editorState });
  };

  const schema = yup.object().shape({
    title: yup.string().required("it can not be empty"),
    description: yup.string().required("it can not be empty"),
    image: yup.string().required("it can not be empty"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (values) => {
    try {
      values.content = draftToHtml(
        convertToRaw(state.editorState.getCurrentContent())
      );
      await axios.post("/api/blog/new", values);
      router.push("/blog/manage");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "We have an error in the server",
        icon: "error",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <input
        type="text"
        {...register("title")}
        name="title"
        placeholder="Title"
        className={"input"}
      />
      <span className={"error-label"}>{errors.title?.message}</span>
      <input
        type="text"
        name="description"
        placeholder="Description"
        className={"input"}
        {...register("description")}
      />
      <span className={"error-label"}>{errors.description?.message}</span>
      <input
        type="text"
        name="image"
        placeholder="Image Url"
        className={"input"}
        {...register("image")}
      />
      <span className={"error-label"}>{errors.image?.message}</span>

      <Editor
        editorState={state.editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="Please Just Type :) ..."
        editorStyle={{ height: "500px", paddingTop: "15px", color: "#fff" }}
      />

      <button className={"button"}>New</button>
    </form>
  );
}

export default NewBlog;
