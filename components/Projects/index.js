import React from "react";
import { projects, project_items } from "./styles.module.css";
import Title from "../Title/index";
import ProjectItem from "./ProjectItem";
import { useLoadData, useRenderData } from "../hooks";
function Project() {
  const { state, loading } = useLoadData("/api/project/all");
  const fetchData = useRenderData(ProjectItem, loading, state);
  return (
    <div className={projects} id="projects">
      <Title titleText={"#projects"} description={"All projects made by me"} />
      <div className={project_items}>{fetchData()}</div>
    </div>
  );
}

export default Project;
