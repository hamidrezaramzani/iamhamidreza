import React, { useState } from "react";
import { nav, show } from "./styles.module.css";
import NavItem from "./NavItem";
import { AiOutlineMenu } from "react-icons/ai";
function Nav({ user }) {
  const [state, setState] = useState(false);

  const handleClickToggleMenu = () => {
    setState((state) => !state);
  };
  return (
    <div className={nav}>
      <button onClick={handleClickToggleMenu}>
        <AiOutlineMenu />
      </button>
      <ul className={state ? show : ""}>
        <NavItem title="Home" link="#home" />
        <NavItem title="Projects" link="#projects" />
        <NavItem title="Blogs" link="#blogs" />
        <NavItem title="Contact Us" link="#contact_us" />
        <NavItem title="About Me" link="#about_me" />

        {user ? <NavItem title="Dashboard" link="/user/dashboard" /> : []}
      </ul>
    </div>
  );
}


export default Nav;
