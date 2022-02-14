import React from "react"; import {
  skills,
  skills_items,
  skills_picture,
  skills_box,
} from "./styles.module.css";
import Title from "../Title/index";
import "react-circular-progressbar/dist/styles.css";
import SkillItem from "./SkillItem";
import { SKILLS } from "../../constants";
import { useTranslation } from "../hooks";

function Skills() {
  const t = useTranslation();
  const renderSkills = () => {
    return SKILLS.map((skill, index) => <SkillItem {...skill} key={index} />);
  };
  return (
    <div className={skills}>
      <div className={skills_picture}>
        <img
          src="/images/alien2.png"
          alt="hamidrezaramzani logo"
          height="350"
        />
      </div>
      <div className={skills_box}>
        <Title titleText={`#${t("skills")}`} description={t("skills_description")} />
        <p>
          {t("skills_description2")}
        </p>
        <div className={skills_items}>{renderSkills()}</div>
      </div>
    </div>
  );
}

export default Skills;
