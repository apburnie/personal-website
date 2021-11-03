import React, { useState } from "react";
import GitHubIcon from "./assets/GitHub.png";
import LinkedInIcon from "./assets/LinkedIn.png";
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
      <div className="h-[550px] mb-10">{presentInfo(page)}</div>

      <table className="w-3/5 mx-auto text-center mb-10">
        <tr>
          <th>
            <button
              className={
                page === "Home" ? "bg-blue-500 text-white" : "bg-gray-50"
              }
              onClick={() => setPage("Home")}
            >
              Home
            </button>
          </th>
          <th>
            <button
              className={
                page === "Skills" ? "bg-blue-500 text-white" : "bg-gray-50"
              }
              onClick={() => setPage("Skills")}
            >
              Skills
            </button>
          </th>
          <th>
            <button
              className={
                page === "Projects" ? "bg-blue-500 text-white" : "bg-gray-50"
              }
              onClick={() => setPage("Projects")}
            >
              Projects
            </button>
          </th>
        </tr>
      </table>

      <table className="w-screen md:w-3/5 bg-gray-50 mx-auto md:rounded-3xl">
        <tr>
          <th>
            <a href="https://github.com/Andrew47">
              <img
                className="h-8 object-contain mx-auto"
                src={GitHubIcon}
                alt="GitHub"
              />
            </a>
          </th>
          <th>
            <a href="https://www.linkedin.com/in/apburnie/">
              <img
                className="h-8 object-contain mx-auto"
                src={LinkedInIcon}
                alt="LinkedIn"
              />
            </a>
          </th>
        </tr>
      </table>
    </div>
  );
}

export default App;
