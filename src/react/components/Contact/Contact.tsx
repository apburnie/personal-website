import Link from "../../components/Link/Link";

import style from "./style.module.css";

export default function Contact() {
  return (
    <div className={style.Contact}>
      <div>
        <div>Email</div> <span>apburnie@hotmail.co.uk</span>
      </div>
      <div>
        <div>LinkedIn</div>
        <div>
          <Link href="https://www.linkedin.com/in/apburnie/">
            linkedin.com/in/apburnie/
          </Link>
        </div>
      </div>
    </div>
  );
}
