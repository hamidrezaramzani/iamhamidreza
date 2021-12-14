import Link from "next/link";
import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaGithub , FaTelegram } from "react-icons/fa";
import {AiOutlineInstagram} from 'react-icons/ai'
import { social_medias } from "./styles.module.css";
import Item from "./Item";
function SocialMedias() {

  return (
    <div className={social_medias}>
    
      <Item link={"https://twitter.com/hamidrezaramzani_80"}>
        <FiTwitter />
      </Item>
      <Item link={"https://github.com/hamidrezaramzani"}>
        <FaGithub />
      </Item>

      <Item link={"https://t.me/manticore_channel"}>
        <FaTelegram />
      </Item>
      <Item link={"https://instagram.com/hamidrezaramzani_"}>
        <AiOutlineInstagram />
      </Item>
     
    </div>
  );
}

export default SocialMedias;
