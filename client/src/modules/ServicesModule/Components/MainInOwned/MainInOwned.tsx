import React from "react";
import "./style/mainOnOwned_style.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function MainInOwned(): React.JSX.Element {


  return (
    <div className="services-container">
      <nav className="navigationBar">
        <NavLink to="/services/MainInOwned" className="nav-link">Main</NavLink>
        <NavLink to="/services/ExcelFirst" className="nav-link">Excel</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
      <div className="excelIframe">
      </div>
    </div>
  );
};

export default MainInOwned;