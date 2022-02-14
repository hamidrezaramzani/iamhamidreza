import React, { useContext } from "react";
import { projects, project_items } from "./styles.module.css";
import Title from "../Title/index";
import ProjectItem from "./ProjectItem";
import { useLoadData, useRenderData, useTranslation } from "../hooks";
function Project() {
  const { state, loading } = useLoadData("/api/project/all");
  const renderData = useRenderData(ProjectItem, loading, state);
  const t = useTranslation();
  console.log(t("project_description"));
  return (
    <div className={projects} id="projects">
      <Title titleText={`#${t("projects")}`} description={t("project_description")} />
      <div className={project_items}>{renderData()}</div>
    </div>
  );
}

export default Project;
