import React, { useState } from "react";
import { useTranslation } from "../hooks";
import { animated_item } from "./styles.module.css";
function AnimatedItems({ name, description, staticImage, animate }) {
  const [state, setState] = useState(staticImage);
  const t = useTranslation();
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
      <img src={`/images/${state}`} alt={description} width={105} />
      <h3>{t(name)}</h3>
      <p>{description}</p>
    </div>
  );
}

export default AnimatedItems;
