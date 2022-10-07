import React from 'react'
import { blog_comment_form } from "./styles.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import Swal from 'sweetalert2';
import axios from 'axios';
const BlogCommentForm = ({ id }) => {
    const schema = yup.object().shape({
        fullname: yup.string().required("please enter your fullname"),
        email: yup
            .string()
            .required("please enter your email")
            .email("please enter a valid email"),
        text: yup.string().required("please enter your message"),
    });

    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const handleSubmitForm = async (values) => {
        try {
            values.id = id;
            await axios.post("/api/comments/new", values);
            Swal.fire({
                title: "Success",
                text: "your comment inserted",
                icon: "success",
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Error",
                text: "we have an error on server",
                icon: "error",
            });
        }
    }

    return (
        <div className={blog_comment_form}>
            <h3>Leave a comment</h3>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <input type="text" className='input' name="fullname" placeholder="Type your fullname" {...register("fullname")} />
                <span className="error-label">{errors.fullname?.message}</span>
                <input type="text" className='input' name="email" placeholder="Type your email" {...register("email")} />
                <span className="error-label">{errors.email?.message}</span>
                <textarea
                    placeholder="Type your message"
                    name="text"
                    className="input"
                    rows={20}
                    {...register("text")}
                ></textarea>
                <span className="error-label">{errors.text?.message}</span>
                <button className="button">Post Comment</button>
            </form>
        </div>
    )
}

export default BlogCommentForm