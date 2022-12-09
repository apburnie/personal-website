import React, { useState } from "react";

export default function Projects() {
  const [sectionNo, setSectionNo] = useState(0);

  return (
    <div className="info relative">
      <section
        className={sectionNo === 0 ? "infoCell" : "infoCell hidden sm:block"}
      >
        <h2 className="font-bold">Sui Explorer</h2>
        <p>
          Built using React, TypeScript and Tailwind. This provided users with
          the ability to observe activity on the Sui Network, a permissionless
          Layer 1 blockchain built using Rust. This was key in achieving the USD
          300 million fund raising.
        </p>
      </section>
      <section
        className={sectionNo === 1 ? "infoCell" : "infoCell hidden sm:block"}
      >
        <h2 className="font-bold mt-5">Mattereum Asset Passports</h2>
        <p>
          Applied Node.js, React and TypeScript asynchronous programming to
          create software and tools to support the creation, validation and
          publishing of Asset Passports as React website UIs for OpenSea
          customers and as Non-fungible Tokens (NFTs) on the blockchain. These
          Asset Passports stored provenance on real-world physical items such as
          historic artefacts, fine art and gold bars, which are for sale on
          OpenSea.
        </p>
      </section>
      <section
        className={sectionNo === 2 ? "infoCell" : "infoCell hidden sm:block"}
      >
        <h2 className="font-bold mt-5">Conversational AI Assistant UI</h2>
        <p>
          Built Conversational AI assistant for Wluper that led to a contract
          with Ocado.
        </p>
      </section>
      <div className="absolute bottom-0 left-0 right-0 sm:hidden w-full flex justify-around">
        <button
          className={sectionNo === 0 && "invisible"}
          onClick={() => setSectionNo((prev) => (prev > 0 ? prev - 1 : prev))}
        >
          Back
        </button>
        <button
          className={sectionNo === 2 && "invisible"}
          onClick={() => setSectionNo((prev) => (prev < 2 ? prev + 1 : prev))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
