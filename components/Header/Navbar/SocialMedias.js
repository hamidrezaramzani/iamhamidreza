import Link from "next/link";
import React from "react";
import { FiTwitter, FiCodesandbox } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { social_medias } from "./styles.module.css";
function SocialMedias() {
  return (
    <div className={social_medias}>
      <Link passHref href="#social">
        <a>
          <FiTwitter />
        </a>
      </Link>

      <Link passHref href="#social">
        <a>
          <FaGithub />
        </a>
      </Link>

      <Link passHref href="#social">
        <a>
          <FiCodesandbox />
        </a>
      </Link>
    </div>
  );
}

export default SocialMedias;
