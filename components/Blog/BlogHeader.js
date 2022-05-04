import React from "react";
import { header, blog_info, blog_image } from "./styles.module.css";
import { MdOutlineContentCopy } from "react-icons/md";
import swal from "sweetalert2";
import { CopyToClipboard } from 'react-copy-to-clipboard';
function BlogHeader({ title, description, image, link, domain }) {

  const handleOnCopy = () => {
    swal.fire({
      title: "Copied",
      text: "this blog url is copied",
      icon: "info"
    })
  }
  return (
    <div className={header}>
      <div className={blog_info}>
        <h1>{title}  <span>{ }</span></h1>
        <p>{description}</p>
        <CopyToClipboard text={`${domain}/b/${link}`}
          onCopy={handleOnCopy}>
          <button>{link} <MdOutlineContentCopy fontSize={18} /></button>
        </CopyToClipboard>

      </div>
      <div className={blog_image} >
        <img src={image} width={300} alt={description} />
      </div>
    </div>
  );
}

export default BlogHeader;
