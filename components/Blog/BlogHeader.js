import React from "react";
import { header, blog_info, blog_image } from "./styles.module.css";
import {MdOutlineContentCopy} from "react-icons/md";
import swal from "sweetalert2";
function BlogHeader({ title, description, image , link , domain }) {

  const handleClickCopyUrl = () => {
    navigator.clipboard.writeText(`${domain}/b/${link}`);
    swal.fire({
      title :"Copied" , 
      text : "this blog url is copied" , 
      icon : "info"
    })
  }
  return (
    <div className={header}>
      <div className={blog_info}>
        <h1>{title}  <span>{}</span></h1>
        <p>{description}</p>
        <button onClick={handleClickCopyUrl}>{link} <MdOutlineContentCopy fontSize={18} /></button>
      </div>
      <div className={blog_image} >
        <img src={image} width={300} alt={description} />
      </div>
    </div>
  );
}

export default BlogHeader;
