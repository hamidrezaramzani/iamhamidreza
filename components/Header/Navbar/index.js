import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import SocialMedias from "./SocialMedias";
import { navbar } from "./styles.module.css";
function Navbar() {
  return (
    <div className={navbar}>
      <Logo />
      <Nav />
      <SocialMedias />
    </div>
  );
}

export default Navbar;
