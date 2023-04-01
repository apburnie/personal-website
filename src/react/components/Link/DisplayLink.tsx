import style from "./style.module.css";

export default function DisplayLink({
  label,
  url,
}: {
  label: string;
  url: string;
}) {
  return (
    <a className={style.displayLink} href={url}>
      {label}
    </a>
  );
}
