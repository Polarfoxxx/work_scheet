import React from "react";
import { SpeedCutModule, WhellLiveModule } from "../";
import "./style/main_style.css";
import { Router, Route, Routes,NavLink } from "react-router-dom";

function Main(): React.JSX.Element {

  return (
    <div className="main">
      <div>
        <nav>
          <NavLink to="/whell-live" className="nav-link">Whell Live</NavLink>
          <NavLink to="/speedCut" className="nav-link">Speed Cut</NavLink>
          {/* Add more navigation links as needed */}
        </nav>
      </div>
        <Routes>
          <Route path="/" element={<WhellLiveModule />} />
          <Route path="/whell-live" element={<WhellLiveModule />} />
          <Route path="/speedCut" element={<SpeedCutModule />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
  );
}

export default Main;