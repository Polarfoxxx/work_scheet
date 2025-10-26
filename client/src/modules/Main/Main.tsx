import React from "react";
import "./style/main_style.css";

import {
  SpeedCutModule,
  GrindingSchemaModule,
  WellcomeModule,
  ServicesModule
} from "../";
import {
  Router,
  Route,
  Routes,
  NavLink
} from "react-router-dom";

function Main(): React.JSX.Element {

  return (
    <div className="main_container">
      <header>
        <h1>Grinding application</h1>
        <p>This is the application for help and calculate value</p>
      </header>
      <nav>
        <div className="navigationBar">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/whell-live" className="nav-link">Whell Live</NavLink>
          <NavLink to="/speedCut" className="nav-link">Speed Cut</NavLink>
          <NavLink to="/services" className="nav-link">Services</NavLink>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<WellcomeModule />} />
          <Route path="/whell-live" element={<GrindingSchemaModule />} />
          <Route path="/speedCut" element={<SpeedCutModule />} />
          <Route path="/services" element={<ServicesModule />} />
        </Routes>
      </main>
      <footer>
        <p> Michal Suchovský. All rights reserved &copy; 2025.</p>
      </footer>
    </div>

  );
}

export default Main;