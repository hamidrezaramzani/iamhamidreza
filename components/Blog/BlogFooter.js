import React, { useState } from "react";
import { blog_footer, blog_like_button } from "./styles.module.css";
import Swal from "sweetalert2";
import { FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
function BlogFooter({ likes, id  , liked}) { 
  const [state , setState] = useState(liked);
  const [count ,setCount] = useState(likes);
  const handleClickToggleLike = async () => {
    try {
       await axios.get(`/api/blog/like/${id}`)
      if(state){
        setState(false)
        setCount(count => count - 1)
      }else{
        setState(true)
        setCount(count => count + 1)
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "we have an error on server",
        icon: "error",
      });
    }
  };


  const renderLikeIcon = () => {
     
    if (state)
      return (
        <>
          <AiFillHeart />
          &nbsp; {count}
        </>
      );

    return (
      <>
        <FiHeart />
        &nbsp; {count}
      </>
    );
  }
  return (
    <div className={blog_footer}>
      <button className={blog_like_button} onClick={handleClickToggleLike}>
        {renderLikeIcon()}
      </button>
    </div>
  );
}

export default BlogFooter;
