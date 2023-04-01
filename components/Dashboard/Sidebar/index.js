import React from "react";
import { sidebar } from "./styles.module.css";
import SidebarItem from "./SidebarItem";
function Sidebar() {
  return (
    <div className={sidebar}>
      <SidebarItem title="Home" link="/" />
      <SidebarItem title="New Experience" link="/experience/new" />
      <SidebarItem title="Manage Experience" link="/blog/new" />
      <SidebarItem title="Create New Blog" link="/blog/new" />
      <SidebarItem title="Manage Blogs" link="/blog/manage" />
      <SidebarItem title="Create New Project" link="/project/new" />
      <SidebarItem title="Manage Projects" link="/project/manage" />
      <SidebarItem title="Create New Song" link="/song/new" />
      <SidebarItem title="Manage Messages" link="/message/manage" />
      <SidebarItem title="Logout" link="/user/logout" />
    </div>
  );
}

export default Sidebar;
