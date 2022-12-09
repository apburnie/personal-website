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

const buttonStyle = (
  selectedPage,
  buttonLabel
) => `bg-gray-50 hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 rounded block shadow
${selectedPage === buttonLabel && "bg-blue-500 text-white "}`;

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="flex flex-col justify-around h-screen">
      <header className="w-screen block">
        <h1 className="text-3xl font-extrabold p-3 bg-gray-50 w-screen sm:w-3/5 text-center mx-auto sm:rounded-3xl shadow">
          Andrew Burnie
        </h1>
      </header>
      <main className="block">{presentInfo(page)}</main>

      <footer className="flex justify-around block">
        <button
          className={buttonStyle(page, "Home")}
          onClick={() => setPage("Home")}
        >
          Home
        </button>
        <button
          className={buttonStyle(page, "Skills")}
          onClick={() => setPage("Skills")}
        >
          Skills
        </button>
        <button
          className={buttonStyle(page, "Projects")}
          onClick={() => setPage("Projects")}
        >
          Projects
        </button>
      </footer>
    </div>
  );
}

export default App;
