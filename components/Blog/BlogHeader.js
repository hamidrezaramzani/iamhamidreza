import React from "react";
import { header, blog_info, blog_image } from "./styles.module.css";
import { MdOutlineContentCopy } from "react-icons/md";
import swal from "sweetalert2";
import moment from "moment";
import { CopyToClipboard } from 'react-copy-to-clipboard';
function BlogHeader({ title, description, image, link, domain, date }) {

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
        <div className={blog_image} >
          <img src={image} width={299} alt={description} />
        </div>
        <span>{moment.unix(date).format("MMMM Do YYYY, h:mm a")}</span>
        <h1>{title}  <span>{ }</span></h1>
        <p>{description}</p>
        <CopyToClipboard text={`${domain}/b/${link}`}
          onCopy={handleOnCopy}>
          <button>{link} <MdOutlineContentCopy fontSize={18} /></button>
        </CopyToClipboard>

      </div>

    </div>
  );
}

export default BlogHeader;
