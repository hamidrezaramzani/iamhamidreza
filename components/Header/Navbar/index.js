import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import SocialMedias from "./SocialMedias";
import { navbar, fixed } from "./styles.module.css";
function Navbar() {
  const [state, setState] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 600) setState(true);
    else setState(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${navbar} ${state ? fixed : ""}`}>
      <Logo />
      <Nav />
      <SocialMedias />
    </div>
  );
}

export default Navbar;
