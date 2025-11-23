import React from "react";
import "./style/wellcomeModule_style.css";


function WellcomeModule(): React.JSX.Element {
  return (
    <div className="wellcome-mod">
      <div className="left-section">
        <img src="/img/logo.png" alt="" />
      </div>
      <div className="right-section">
        <div className="right_tittle">
          <h1>Welcome to the my page</h1>
        </div>
        <div className="right_content">
          <p>This module is designed to provide an introduction and overview of the application.</p>
        </div>
        <div className="right_list">
          <div className="list_tittle">
            <h1>This page include</h1>
          </div>
          <ul className="list_content">
            <li>
              <h4>Grinding schema calculations</h4>
              <p>This module helps users to create and analyze grinding schemas based on various parameters and requirements.</p>
            </li>
            <li>
              <h4>Speed cut calculations</h4>
              <p>This module provides tools to calculate optimal cutting speeds for different materials and grinding wheels.</p>
            </li>
            <li>
              <h4>Cykle time calculations</h4>
              <p>This module assists users in determining the cycle times for grinding operations to improve efficiency.</p>
            </li>
            <li>
              <h4>Grinding wheel life calculations</h4>
              <p>This module estimates the lifespan of grinding wheels based on usage patterns and material properties.</p>
            </li>
            <li>
              <h4>Services</h4>
              <p>This section offers additional services such as data analysis, report generation, and integration with other tools.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WellcomeModule;