import React from "react";
import { SpeedCutModule, WhellLiveModule } from "../";
import "./style/main_style.css";
import { Router, Route, Routes, NavLink } from "react-router-dom";

function Main(): React.JSX.Element {

  return (
    <div className="main">
      <div>
<<<<<<< HEAD:client/src/modules/Main/Main.tsx
        <nav>
          <NavLink to="/whell-live" className="nav-link">Whell Live</NavLink>
          <NavLink to="/speedCut" className="nav-link">Speed Cut</NavLink>
          {/* Add more navigation links as needed */}
        </nav>
      </div>
=======
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
>>>>>>> e8c4e04f880bb62def5749772cb44325affaf3a8:src/modules/Main/Main.tsx
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