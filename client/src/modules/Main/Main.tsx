import React from "react";
import {
  SpeedCutModule,
  WhellLiveModule,
  WellcomeModule,
  ServicesModule
} from "../";
import "./style/main_style.css";
import { Router, Route, Routes, NavLink } from "react-router-dom";

function Main(): React.JSX.Element {

  return (
    <div className="main">
      <header>
        <h1>Main Module</h1>
        <p>This is the main module of the application, serving as a container for other modules.</p>
      </header>
      <nav>
        <div className="navigationBar">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/whell-live" className="nav-link">Whell Live</NavLink>
          <NavLink to="/speedCut" className="nav-link">Speed Cut</NavLink>
          <NavLink to="/services" className="nav-link">Services</NavLink>
          {/* Add more navigation links as needed */}
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<WellcomeModule />} />
          <Route path="/whell-live" element={<WhellLiveModule />} />
          <Route path="/speedCut" element={<SpeedCutModule />} />
          <Route path="/speedCut" element={<SpeedCutModule />} />
          <Route path="/services" element={<ServicesModule />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <footer>
        <p> Michal Suchovský. All rights reserved &copy; 2025.</p>
      </footer>
    </div>

  );
}

export default Main;