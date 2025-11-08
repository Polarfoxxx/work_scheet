import React from "react";
import "./style/mainOnOwned_style.css";
import { Outlet, NavLink } from "react-router-dom";


function MainInOwned(): React.JSX.Element {


  return (
    <div className="services-container">
      <nav className="navigationBar">
        <NavLink to="excelFirst" className="nav-link">Excel one</NavLink>
        <NavLink to="excelSecond" className="nav-link">Excel second</NavLink>
      </nav>
      <div className="outlet-container">
      <Outlet />
      </div>
    </div>
  );
};

export default MainInOwned;