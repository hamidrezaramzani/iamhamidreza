import React from "react";
import { animated_items } from "./styles.module.css";
import Item from "./Item";
function AnimatedItems({ data }) {
  const renderItems = () => {
    return data.map((item, index) => <Item key={index} {...item} />);
  };
  return <div className={animated_items}>{renderItems()}</div>;
}

export default AnimatedItems;
