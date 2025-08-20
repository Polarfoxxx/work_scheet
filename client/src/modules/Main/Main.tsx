import React from "react";
import {
  SpeedCutModule,
  WhellLiveModule,
  WellcomeModule
} from "../";
import "./style/main_style.css";
import { Router, Route, Routes, NavLink } from "react-router-dom";

function Main(): React.JSX.Element {

  return (
    <div className="main">
      <div className="header">
        <h1>Main Module</h1>
        <p>This is the main module of the application, serving as a container for other modules.</p>
      </div>
      <div className="navigationBar">
        <nav>
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/whell-live" className="nav-link">Whell Live</NavLink>
          <NavLink to="/speedCut" className="nav-link">Speed Cut</NavLink>
          {/* Add more navigation links as needed */}
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<WellcomeModule />} />
        <Route path="/whell-live" element={<WhellLiveModule />} />
        <Route path="/speedCut" element={<SpeedCutModule />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>

  );
}

export default Main;