import React from "react";
import { projects, project_items } from "./styles.module.css";
import Title from "../Title/index";
import ProjectItem from "./ProjectItem";
function index() {
  const dummyData = {
    title: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
  };
  return (
    <div className={projects} id="projects">
      <Title titleText={"#projects"} description={"All projects made by me"} />
      <div className={project_items}>
        <ProjectItem {...dummyData} />
        <ProjectItem {...dummyData} />
        <ProjectItem {...dummyData} />
        <ProjectItem {...dummyData} />
        <ProjectItem {...dummyData} />
        <ProjectItem {...dummyData} />
        <ProjectItem {...dummyData} />
        <ProjectItem {...dummyData} />
      </div>
    </div>
  );
}

export default index;
