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
        <h1 className="text-3xl font-extrabold p-3 bg-gray-50 w-3/5 text-center mx-auto mt-4 mb-4">
          Andrew Burnie
        </h1>
      </header>
      <div className="w-screen h-[550px] mb-10">{presentInfo(page)}</div>

      <table className="w-3/5 mx-auto text-center mb-10">
        <tr>
          <th>
            <button onClick={() => setPage("Home")}>Home</button>
          </th>
          <th>
            <button onClick={() => setPage("Skills")}>Skills</button>
          </th>
          <th>
            <button onClick={() => setPage("Projects")}>Projects</button>
          </th>
        </tr>
      </table>

      <table className="w-full bg-gray-50 mx-auto">
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
