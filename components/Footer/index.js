import Link from "next/link";
import React from "react";
import { footer, social_medias, navbar , copyright } from "./styles.module.css";
import { FiTwitter, FiCodesandbox } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import NavItem from "../Header/Navbar/NavItem";
function Footer() {
  return (
    <footer className={footer}>
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
      <div className={navbar}>
        <ul>
          <NavItem link={""} title={"About Me"} />
          <NavItem link={""} title={"Contact Us"} />
          <NavItem link={""} title={"Projects"} />
          <NavItem link={""} title={"Blog"} />
        </ul>
      </div>
      <div className={copyright}>
        <p>© 2021 iamhamidreza.ir - All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
