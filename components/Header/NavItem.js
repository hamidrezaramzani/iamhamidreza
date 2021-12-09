import Link from "next/link";
import React from "react";

function NavItem({title , link}) {
  return (
    <li>
      <Link href={link}>{title}</Link>
    </li>
  );
}

export default NavItem;
