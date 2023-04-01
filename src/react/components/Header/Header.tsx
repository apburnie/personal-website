import DisplayLink from "../Link/DisplayLink";
import style from "./style.module.css";
import Cog from "../../../assets/cog.svg";

export default function Header({ currentPage }: { currentPage: string }) {
  const nextPage =
    currentPage === "Past Projects" ? "Services" : "Past Projects";
  return (
    <header className={style.header}>
      <div className={style.shrink}>
        <DisplayLink url="/" label="Back to Home Page" />
      </div>

      <div className={style.currentPage}>
        <div>
          <img
            src={Cog}
            className={`${style.cogLarge} ${style.clockwise}`}
            alt="first spinning cog"
          />
          <img
            src={Cog}
            className={`${style.cogSmall} ${style.anticlockwise}`}
            alt="second spinning cog"
          />
        </div>
        <h1>{currentPage}</h1>
      </div>
      <div className={style.shrink}>
        <DisplayLink
          url={`/${nextPage.toLowerCase().replace(/ /g, "")}/`}
          label={nextPage}
        />
      </div>
    </header>
  );
}
