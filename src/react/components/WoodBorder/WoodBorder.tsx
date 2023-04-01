import type { ReactNode } from "react";
import style from "./style.module.css";

export default function WoodBorder({ children }: { children: ReactNode }) {
  return (
    <div className={style.Container}>
      <div className={`${style.horizontalBlock} ${style.top}`} />
      <div className={style.MiddleContainer}>
        <div className={style.sideBlock} />
        <div className={style.ContentContainer}>{children}</div>
        <div className={style.sideBlock} />
      </div>
      <div className={`${style.horizontalBlock} ${style.bottom}`} />
    </div>
  );
}
