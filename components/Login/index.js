import React from "react";
import { login, login_form } from "./styles.module.css";
function index() {
  return (
    <div className={login}>
      <img
        src="/images/banner.webp"
        alt="alien logo"
        width={150}
        height={240}
      />
      <div className={login_form}>
        <form>
          <h1>Admin Login</h1>

          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default index;
