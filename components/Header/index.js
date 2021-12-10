import React from "react";
import Navbar from "./Navbar";
import ScrollDownLink from "./ScrollDownLink";
import { header } from "./styles.module.css";
import Welcome from "./Welcome";
function Header() {
  return (
    <header className={header}>
      <Navbar />
      <Welcome />
      <ScrollDownLink />
    </header>
  );
}

export default Header;
