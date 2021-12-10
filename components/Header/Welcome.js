import React from "react";
import { welcome } from "./styles.module.css";
function Welcome() {
  return (
    <div className={welcome}>
      <img
        src="/images/alien.png"
        alt="hamidrezaramzani logo"
        height="350"
        // width="450"
      />
      <h1>
        <span> HAMIDREZA </span> RAMZANI
      </h1>
      <p>React Developer</p>
    </div>
  );
}

export default Welcome;
