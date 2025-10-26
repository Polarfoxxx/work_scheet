import React from "react";
import "./style/wellcomeModule_style.css";


function WellcomeModule(): React.JSX.Element {
  return (
    <div className="wellcome-mod">
      <div className="left-section">
        <img src="/img/logo.png" alt="" />
      </div>
      <div className="right-section">
          <h1>Welcome to the Wellcome Module</h1>
          <p>This module is designed to provide an introduction and overview of the application.</p>
      </div>
    </div>
  );
}

export default WellcomeModule;