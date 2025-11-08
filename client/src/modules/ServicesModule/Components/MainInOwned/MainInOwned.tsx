import React from "react";
import "./style/mainOnOwned_style.css";
import { NavLink } from "react-router-dom";

function MainInOwned(): React.JSX.Element {



  return (
    <div className="excelIframe">
      <div>
         <div className="navigationBar">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/services/ExcelFirst" className="nav-link">Schema</NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainInOwned;