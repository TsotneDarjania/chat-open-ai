import React from "react";
import style from "./style.module.css";

const Loading = () => {
  return (
    <div className={style.loading}>
      <div className={style.content}>
        <p>Loading </p>
        <p className={style.pointAnime1}>.</p>
        <p className={style.pointAnime2}>.</p>
        <p className={style.pointAnime3}>.</p>
      </div>
    </div>
  );
};

export default Loading;
