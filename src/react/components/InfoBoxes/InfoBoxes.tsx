import { ReactNode, isValidElement } from "react";
import style from "./style.module.css";
import WoodBorder from "../WoodBorder/WoodBorder";

export default function InfoBoxes({ children }: { children: ReactNode[] }) {
  return (
    <div className={style.container}>
      {children.map((child, i) =>
        isValidElement(child) && child.type === "div" ? (
          <div className={style.note} key={i}>
            {child}
          </div>
        ) : (
          <div key={i}>
            <WoodBorder>{child}</WoodBorder>
          </div>
        )
      )}
    </div>
  );
}
