import React from "react";
import style from "./style.module.css";

const AiAnimation = () => {
  const quantity = 300;
  const generateCircles = () => {
    const circles = [];
    for (let i = 0; i < quantity; i++) {
      const c = (
        <div
          style={{ backgroundColor: "rgb(154, 154, 154)" }}
          key={`circe_${i}`}
          className={style.c}
        ></div>
      );
      circles.push(c);
    }
    return circles;
  };

  return (
    <div style={{ backgroundColor: "yellow" }} className={style.wrap}>
      {generateCircles()}
    </div>
  );
};

export default AiAnimation;
