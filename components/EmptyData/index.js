import React from "react";
import { empty } from "./styles.module.css";
function EmptyData() {
  return <div className={empty}>
      <img src="/images/empty.gif" width={125} alt="Empty gif" />
      <h3>Nothing To Show</h3>
  </div>;
}

export default EmptyData;
