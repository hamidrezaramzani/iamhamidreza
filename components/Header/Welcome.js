import React from "react";
import { welcome } from "./styles.module.css";
function Welcome() {
  return (
    <div className={welcome}>
      <img
        src="/images/logo.png"
        alt="hamidrezaramzani logo"
        height="450"
        width="450"
      />
      <h1>
        HELLO , I AM<span> HAMIDREZA </span> RAMZANI
      </h1>
      <p>Frontend Developer</p>
    </div>
  );
}

export default Welcome;
