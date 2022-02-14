import React from "react";
import AnimatedItems from "../AnimatedItems";
import { about_us } from "./styles.module.css";
import Title from "../Title/index";
import { ABOUT_ME } from "../../constants";
import { useTranslation } from "../hooks";
function AboutUs() {
  const t = useTranslation();
  return (
    <div className={about_us} id="#about_us">
      <Title titleText={t("about_title")} description={t("about_text")} />
      <AnimatedItems data={ABOUT_ME} />
    </div> 
  );
}

export default AboutUs;
