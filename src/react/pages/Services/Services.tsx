import InfoBoxes from "../../components/InfoBoxes/InfoBoxes";

export default function PastProjects() {
  return (
    <InfoBoxes>
      <div>
        <h2>Details</h2>
        <p>
          Turn your vision into an accessible website fully-tested to work
          across all devices
        </p>
        <p>Whether you are in timezone GMT - 8 to GMT + 8</p>
        <p>Or can pay in a fiat currency or cryptocurrency</p>
      </div>

      <section>
        <h2>Frontend</h2>
        <p>Semantic HTML</p>
        <p>JavaScript / TypeScript / React</p>
        <p>CSS / Tailwind</p>
      </section>
      <section>
        <h2>APIs</h2>
        <p>RPC / REST / GraphQL / web3.js / Ethers.js</p>
      </section>
      <section>
        <h2>Backend</h2>
        <p>SQL / NoSQL</p>
        <p> Python / Node.js</p>
        <p>AWS / Microsoft Azure</p>
      </section>
    </InfoBoxes>
  );
}
