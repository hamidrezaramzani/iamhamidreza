import Link from "next/link";
import React from "react";

function Item({ children, link }) {
  return (
    <Link passHref href={link}>
      <a>{children}</a>
    </Link>
  );
}

export default Item;
