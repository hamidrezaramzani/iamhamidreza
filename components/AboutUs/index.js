import React from "react";
import AboutItem from "./AboutItem";
import { about_us, about_me_items } from "./styles.module.css";
import Title from "../Title/index";
import { ABOUT_ME } from "../../constants";
function AboutUs() {
  const renderItems = () => {
    return ABOUT_ME.map((item, index) => <AboutItem key={index} {...item} />);
  };
  return (
    <div className={about_us} id="#about_us">
      <Title
        titleText={"#AboutUs"}
        description="My Name is Hamidreza Ramzani , I'm React Developer based in IRAN and this is a selection of my personal and professional work"
      />
      <div className={about_me_items}>{renderItems()}</div>
    </div>
  );
}

export default AboutUs;
