import React, { useState } from "react";
import { animated_item } from "./styles.module.css";
function AnimatedItems({ title, description, staticImage, animate }) {
  const [state, setState] = useState(staticImage);
  const handleMouseEnter = () => {
    setState(animate);
  };

  const handleMouseLeave = () => {
    setState(staticImage);
  };
  return (
    <div
      className={animated_item}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={`/images/${state}`} alt={title} width={105} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default AnimatedItems;
