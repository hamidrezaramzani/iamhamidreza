import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { skill_item } from "./styles.module.css";
export default function SkillItem({ title, percent }) {
  return (
    <div className={skill_item}>
      <div>
        <CircularProgressbar
          value={percent}
          text={`${percent}%`}
          styles={buildStyles({
            textColor: "white",
            pathColor: "gold",
            trailColor: "#121221",
          })}
        />
      </div>
      <h3>{title}</h3>
    </div>
  );
}
