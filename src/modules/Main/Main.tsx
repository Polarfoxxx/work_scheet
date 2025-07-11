import React from "react";
import { SpeedCutModule, WhellLiveModule } from "../";
import "./style/main_style.css";
import { Router, Route, Routes, NavLink } from "react-router-dom";

function Main(): React.JSX.Element {

  return (
    <div className="main">
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/whell-live">Whell Live</NavLink>
            </li>
            <li>
              <NavLink to="/speedCut">Speed Cut</NavLink>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<WhellLiveModule />} />
          <Route path="/whell-live" element={<WhellLiveModule />} />
          <Route path="/speedCut" element={<SpeedCutModule />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>

    </div>
  );
}

export default Main;