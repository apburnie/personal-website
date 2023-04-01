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
          alt="Andrew Burnie's Photo"
          height="100%"
          className={style.photo}
        />
      </div>

      <div className={style.Introbox}>
        <div>
          <p>
            I&rsquo;m <span className={style.emphasis}>Andrew Burnie</span> and
            I deliver User Interfaces that transform the value of companies{" "}
          </p>
          <p>
            Whether you&rsquo;re in North America or East Asia, and are looking
            for advice on design, Frontend Engineering or a Fullstack service, I
            can help you to turn your vision into reality.
          </p>
          <p className={style.emphasis}>
            Click a link to find out more or reach out using the below details
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
