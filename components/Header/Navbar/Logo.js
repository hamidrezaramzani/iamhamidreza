import React from "react";
import { logo } from "./styles.module.css";
function Logo() {
  return (
    <div className={logo}>
      <img src="/images/logo-small.png" alt="Logo" width={45} height={45} />
      <h2><span>H</span>.Ramzani</h2>
    </div>
  );
}

export default Logo;
