import React from "react";
import AboutItem from "./AboutItem";
import { about_us, title, about_me_items } from "./styles.module.css";
function AboutUs() {
  const data = [
    {
      title: "Name",
      description: "Hamidreza Ramzani",
      staticImage: "user-static.png",
      animate: "user.gif",
    },
    {
      title: "College",
      description: "Shamsipour Technical and Vocational College",
      staticImage: "education-static.png",
      animate: "education.gif",
    },
    {
      title: "Date of birth",
      description: "2002/11/06",
      staticImage: "birthday-static.png",
      animate: "birthday.gif",
    },
  ];

  const renderItems = () => {
    return data.map((item, index) => <AboutItem key={index} {...item} />);
  };
  return (
    <div className={about_us} id="#about_us">
      <div className={title}>
        <p>#AboutUs</p>
        <h1>My Name is Hamidreza Ramzani , I&apos;m React Developer based in Iran and this is a selection of my personal and professional work</h1>
      </div>

      <div className={about_me_items}>{renderItems()}</div>
    </div>
  );
}

export default AboutUs;
