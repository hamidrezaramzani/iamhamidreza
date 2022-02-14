import React, { useContext } from "react";
import { LanguagesContext } from "../../context/providers/LanguagesProvider";
import { title } from "./styles.module.css";
function Title({ titleText, description }) {
  const { state } = useContext(LanguagesContext);
  return (
    <div className={title}>
      <p
        style={{
          fontFamily: state.language === "fa" ? "iranyekan" : "Rochester",
        }}
      >
        {titleText}
      </p>
      <h1>{description}</h1>
    </div>
  );
}

export default Title;
