import React from "react";
import { SpinnerDotted } from "spinners-react";
import { loading } from "./styles.module.css";
function index() {
  return (
    <div className={loading}>
      <SpinnerDotted color="#daa520" />
    </div>
  );
}

export default index;
