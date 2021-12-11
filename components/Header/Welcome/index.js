import React from "react";
import { welcome } from "./styles.module.css";
import Typist from "react-typist";
function Welcome() {
  return (
    <div className={welcome}>
      <img src="/images/alien.png" alt="hamidrezaramzani logo" height="350" />
      <Typist>
        <h1>
          <span>            
            Hamidreza 
          </span>
           Ramzani
        </h1>
      </Typist>
      <p>React Developer</p>
    </div>
  );
}

export default Welcome;
