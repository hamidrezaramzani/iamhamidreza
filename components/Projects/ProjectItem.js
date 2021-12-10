import Link from "next/link";
import React from "react";
import { project_item } from "./styles.module.css";
function ProjectItem({ title, description }) {
  return (
    <div className={project_item}>
      <Link href="/projects/id">
        <a>
          <img
            src="https://picsum.photos/400/200?grayscale"
            alt="testing image"
          />
          <h3>{title}</h3>
          <p>{description}</p>
        </a>
      </Link>
    </div>
  );
}

export default ProjectItem;
