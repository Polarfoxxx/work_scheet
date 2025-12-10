import React from "react";
import "./style/mainOnOwned_style.css";
import { Outlet, NavLink } from "react-router-dom";


function MainInOwned(): React.JSX.Element {


  return (
    <div className="services-container">
      <nav className="navigationBar">
        <NavLink to="education" className="nav-link">Education</NavLink>
        <NavLink to="excelFirst" className="nav-link">Excel one</NavLink>
        <NavLink to="excelSecond" className="nav-link">Excel second</NavLink>
        <NavLink to="picsAnalyze" className="nav-link">Picture analýze</NavLink>
        <NavLink to="whellSignal" className="nav-link">Whell signál</NavLink>
      </nav>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
};

export default MainInOwned;