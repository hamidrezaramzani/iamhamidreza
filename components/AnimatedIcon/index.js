import React, { useState } from "react";
import { animated_icon } from "./styles.module.css";
function AnimatedIcon({ title, description, staticImage, animate }) {
  const [state, setState] = useState(staticImage);
  const handleMouseEnter = () => {
    setState(animate);
  };

  const handleMouseLeave = () => {
    setState(staticImage);
  };
  return (
    <div
      className={animated_icon}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={`/images/${state}`} alt="thisi s yesy" width={105} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default AnimatedIcon;
