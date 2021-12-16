import React from "react";
import Navbar from "./Navbar";
import ScrollDownLink from "./ScrollDownLink";
import { header } from "./styles.module.css";
import Welcome from "./Welcome";
function Header({user}) {
  return (
    <header className={header}>
      <Navbar user={user} />
      <Welcome />
      <ScrollDownLink />
    </header>
  );
}

export default Header;
