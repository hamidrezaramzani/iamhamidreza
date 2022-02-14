import React from "react";
import { welcome } from "./styles.module.css";
import { useTranslation } from "../../hooks";
function Welcome() {
  const t = useTranslation();
  const fullName = t("name").split(" ");
  const firstName = fullName[0];
  const lastName = fullName[1];
  return (
    <div className={welcome}>
      <img src="/images/alien.png" alt="hamidrezaramzani logo" height="350" />
      <h1>
        <span>{firstName}</span>
        {lastName}
      </h1>
      <p>React Developer</p>
    </div>
  );
}

export default Welcome;
