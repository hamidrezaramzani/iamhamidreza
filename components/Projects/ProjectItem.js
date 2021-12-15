import Link from "next/link";
import React from "react";
import { project_item } from "./styles.module.css";
function ProjectItem({ title, description, image, link }) {
  console.log("Hello World");
  return (
    <div className={project_item}>
      <Link href={link}>
        <a>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </a>
      </Link>
    </div>
  );
}

export default ProjectItem;
