import type { ReactNode } from "react";
import style from "./style.module.css";

export default function Link({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${style.link} ${style.url}`}
    >
      {children}
    </a>
  );
}
