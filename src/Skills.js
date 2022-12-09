export default function Skills() {
  return (
    <div className="info">
      <dl className="infoCell">
        <dt className="font-bold mt-[100px]">Frontend</dt>
        <dd>JavaScript, TypeScript, React, Vue</dd>
      </dl>
      <dl className="infoCell">
        <dt className="font-bold mt-5">Backend</dt>
        <dd>
          <ul>
            <li>REST, RPC and GraphQL APIs</li>
            <li>AWS and Azure</li>
            <li>Node.js and Python</li>
            <li>SQL and NoSQL</li>
          </ul>
        </dd>
      </dl>
      <dl className="infoCell">
        <dt className="font-bold mt-5">NFTs and DeFi</dt>
        <dd>
          <p>web3.js, MetaMask, OpenSea, IPFS, Truffle</p>
          <p>PhD with 6 publications</p>
        </dd>
      </dl>
    </div>
  );
}
