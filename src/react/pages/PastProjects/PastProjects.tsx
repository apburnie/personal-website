import Link from "../../components/Link/Link";
import InfoBoxes from "../../components/InfoBoxes/InfoBoxes";

import style from "./style.module.css";

export default function PastProjects() {
  return (
    <>
      <InfoBoxes>
        <section>
          <h2>Mysten Labs Sui Explorer</h2>
          <p>
            <span>This </span>
            <Link href="https://github.com/MystenLabs/sui/tree/main/apps/explorer">
              opensource codebase
            </Link>
            <span>
              {" "}
              enables users to observe activity on the Sui Network at{" "}
            </span>
            <Link href="https://explorer.sui.io/">explorer.sui.io</Link>. Mysten
            Labs raised USD 300 million in funding
          </p>
        </section>
        <section>
          <h2>Mattereum Asset Passports</h2>
          <p>
            Created website UIs to explain NFTs that store provenance on
            real-world physical items to OpenSea customers. Also built
            TypeScript Node.js CLI tools for the Ontology Team
          </p>
        </section>
        <section>
          <h2>Wluper Conversational AI Assistant UI</h2>
          <p>
            Created the Conversational AI Assistant UI which led to a contract
            with Ocado
          </p>
        </section>
        <section>
          <h2>OceanBuilder</h2>
          <p>
            This project shows how WebGL can be used with React to create 3D
            immersive experiences. For further details, see{" "}
            <Link href="https://github.com/Andrew47/ocean-builder">GitHub</Link>
          </p>
        </section>
        <div className={style.dynamiclink}>
          <Link href="https://github.com/Andrew47">
            See GitHub for more examples &#8594;
          </Link>
        </div>
      </InfoBoxes>
    </>
  );
}
