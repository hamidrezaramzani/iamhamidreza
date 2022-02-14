import React, { useState } from "react";
import { nav, show } from "./styles.module.css";
import NavItem from "./NavItem";
import { AiOutlineMenu } from "react-icons/ai";
import { useTranslation } from "../../../hooks";
function Nav({ user }) {
  const [state, setState] = useState(false);
  const t = useTranslation();
  const handleClickToggleMenu = () => {
    setState((state) => !state);
  };
  return (
    <div className={nav}>
      <button onClick={handleClickToggleMenu}>
        <AiOutlineMenu />
      </button>
      <ul className={state ? show : ""}>
        <NavItem title={t("home")} link="#home" />
        <NavItem title={t("projects")} link="#projects" />
        <NavItem title={t("blogs")} link="#blogs" />
        <NavItem title={t("contact")} link="#contact_us" />
        <NavItem title={t("about")} link="#about_me" />

        {user ? <NavItem title="Dashboard" link="/user/dashboard" /> : []}
      </ul>
    </div>
  );
}

export default Nav;
