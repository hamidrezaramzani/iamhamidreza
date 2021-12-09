import Link from "next/link";
import React from "react";
import { nav } from "./styles.module.css";
import NavItem from "./NavItem";
function Nav() {
  return (
    <div className={nav}>
      <ul>
        <NavItem title="Home" link="#home" />
        <NavItem title="Projects" link="#projects" />
        <NavItem title="Blogs" link="#blogs" />
        <NavItem title="Contact Us" link="#contact_us" />
        <NavItem title="About Me" link="#about_me" />
      </ul>
    </div>
  );
}

export default Nav;
