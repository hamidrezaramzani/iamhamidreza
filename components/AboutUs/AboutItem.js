import React, { useState } from "react";
import { about_me_item } from "./styles.module.css";
function AboutItem({ title, description, staticImage, animate }) {
  const [state, setState] = useState(staticImage);
  const handleMouseEnter = () => {
    setState(animate);
  };

  const handleMouseLeave = () => {
    setState(staticImage);
  };
  return (
    <div
      className={about_me_item}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={`/images/${state}`} alt="thisi s yesy" width={105} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default AboutItem;
