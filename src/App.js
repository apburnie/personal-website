import React, { useState } from "react";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";

function presentInfo(page) {
  switch (page) {
    case "Home":
      return <Home />;
    case "Skills":
      return <Skills />;
    case "Projects":
      return <Projects />;
    default:
      return <Home />;
  }
}

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div>
      <header className="w-screen">
        <h1 className="text-3xl font-extrabold p-3 bg-gray-50 w-3/5 text-center mx-auto mt-4 mb-4 rounded-3xl">
          Andrew Burnie
        </h1>
      </header>
      <main className="h-[550px] mb-10">{presentInfo(page)}</main>

      <footer>
        <button
          className={
            page === "Home" ? "bg-blue-500 text-white shadow" : "bg-gray-50"
          }
          onClick={() => setPage("Home")}
        >
          Home
        </button>
        <button
          className={
            page === "Skills" ? "bg-blue-500 text-white shadow" : "bg-gray-50"
          }
          onClick={() => setPage("Skills")}
        >
          Skills
        </button>
        <button
          className={
            page === "Projects" ? "bg-blue-500 text-white shadow" : "bg-gray-50"
          }
          onClick={() => setPage("Projects")}
        >
          Projects
        </button>
      </footer>
    </div>
  );
}

export default App;
