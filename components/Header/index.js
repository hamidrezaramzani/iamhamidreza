import React from "react";
import Navbar from "./Navbar";
import { header } from "./styles.module.css";
import Welcome from "./Welcome";
function Header() {
  return (
    <header className={header}>
      <Navbar />
      <Welcome />
    </header>
  );
}

export default Header;
