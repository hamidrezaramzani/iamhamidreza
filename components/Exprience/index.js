import React from "react";
import { experience, list } from "./styles.module.css";
import Title from "../Title";
import ExperienceItem from "./ExperienceItem";
import { useLoadData, useRenderData } from "../hooks";
const Experience = () => {
  const { state, loading } = useLoadData("/api/experience/all");
  const renderData = useRenderData(ExperienceItem, loading, state);
  return (
    <div className={experience}>
      <Title titleText={"#Experience"} description="where did i work?" />
      <div className={list}>{renderData()}</div>
    </div>
  );
};

export default Experience;
