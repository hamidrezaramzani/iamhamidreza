import React from "react";
import Sidebar from "./Sidebar";
import { dashboard, content, header } from "./styles.module.css";
function Dashboard({ children, title }) {
  return (
    <div className={dashboard}>
      <Sidebar />
      <div className={content}>
        <div className={header}>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}



export default Dashboard;
