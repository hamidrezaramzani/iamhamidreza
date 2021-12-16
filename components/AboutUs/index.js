import React from "react";
import AnimatedItems from "../AnimatedItems";
import { about_us } from "./styles.module.css";
import Title from "../Title/index";
import { ABOUT_ME } from "../../constants";
function AboutUs() {

  return (
    <div className={about_us} id="#about_us">
      <Title
        titleText={"#AboutUs"}
        description="My Name is Hamidreza Ramezani , I'm React Developer based in IRAN and this is a selection of my personal and professional work"
      />
      <AnimatedItems data={ABOUT_ME} />
  
    </div>
  );
}

export default AboutUs;
