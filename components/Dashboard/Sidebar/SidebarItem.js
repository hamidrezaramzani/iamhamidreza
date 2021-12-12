import Link from "next/link";
import React from "react";
import { sidebar_item } from "./styles.module.css";
function SidebarItem({ link, title }) {
  return (
    <div className={sidebar_item}>
      <Link href={link}>
        <a>
          <h3>{title}</h3>
        </a>
      </Link>
    </div>
  );
}

export default SidebarItem;
