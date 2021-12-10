import Link from "next/link";
import React from "react";
import { HiOutlineArrowDown } from "react-icons/hi";
import { scrool_down_link } from "./styles.module.css";
function ScrollDownLink() {
  return (
    <Link href="#projects">
      <a className={scrool_down_link}>
        <HiOutlineArrowDown />
      </a>
    </Link>
  );
}

export default ScrollDownLink;
