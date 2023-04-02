import Bubble from "../../../assets/bubble.svg";
import DisplayLink from "../../components/Link/DisplayLink";

import style from "./style.module.css";

export default function Index() {
  return (
    <div className={style.HomeContent}>
      <div className={style.Profile}>
        <img src={Bubble} className={style.bubble} />
        <img
          src="/profileLarge.png"
          alt="Photo of Andrew Burnie The UI Noodler"
          height="100%"
          className={style.photo}
        />
      </div>

      <div className={style.Introbox}>
        <div>
          <p>
            I&rsquo;m{" "}
            <span className={style.emphasis}>
              Andrew Burnie The UI Noodler.
            </span>{" "}
            I deliver User Interfaces that transform the value of companies.{" "}
          </p>
          <p>
            Whether you&rsquo;re in North America or East Asia, and are looking
            for advice on design, Frontend Engineering or a Fullstack service, I
            can help you to turn your vision into reality.
          </p>
          <p className={style.emphasis}>
            Use the below contact details to reach out or click on the links for
            details on services offered and examples of past projects
          </p>
        </div>
      </div>

      <div className={style.Options}>
        <DisplayLink label="Services" url="/services/" />
        <DisplayLink label="Past Projects" url="/pastprojects/" />
      </div>
    </div>
  );
}
