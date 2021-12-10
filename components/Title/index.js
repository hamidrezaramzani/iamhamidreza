import React from "react";
import { title } from "./styles.module.css";
function Title({ titleText, description }) {
  return (
    <div className={title}>
      <p>{titleText}</p>
      <h1>{description}</h1>
    </div>
  );
}

export default Title;
