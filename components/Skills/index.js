import React from "react";
import {
  skills,
  skills_items,
  skills_picture,
  skill_item,
  skills_box,
} from "./styles.module.css";
import Title from "../Title/index";
import "react-circular-progressbar/dist/styles.css";
import SkillItem from "./SkillItem";
function Skills() {
  return (
    <div className={skills}>
      <div className={skills_picture}>        
        <img
          src="/images/alien2.png"
          alt="hamidrezaramzani logo"
          height="350"
          // width="450"
        />
      </div>
      <div className={skills_box}>
        <Title titleText="#skills" description="Here are the skills I have" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className={skills_items}>
          <SkillItem title={"HTML5"} percent={90} />
          <SkillItem title={"CSS3"} percent={90} />
          <SkillItem title={"JAVASCRIPT"} percent={70} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
