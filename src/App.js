import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Paragraph from "./Paragraph";

import testContext from "./testContext";

const App = () => {
  const [status, setStatus] = useState("paused");
  const togglePlayPause = (stati) => setStatus(stati);
  return (
    <div className="App">
      <testContext.Provider value={{ status, togglePlayPause }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Paragraph />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </testContext.Provider>
    </div>
  );
};

export default App;
