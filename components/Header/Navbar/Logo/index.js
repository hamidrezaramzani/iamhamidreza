import Link from "next/link";
import React from "react";
import { logo } from "./styles.module.css";
function Logo() {
  return (
    <div className={logo}>
      <Link href="/">
        <a>
          <img src="/images/alien-head.png" alt="Logo" width={35} />
          <h2>
            <span>H</span>.Ramzani
          </h2>
        </a>
      </Link>
    </div>
  );
}

export default Logo;
