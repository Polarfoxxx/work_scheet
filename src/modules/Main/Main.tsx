import React from "react";
import { SpeedCutModule } from "../SpeedCutModule";
import "./style/main_style.css";

function Main(): React.JSX.Element {


  return (
    <div className="main">
      <div className="main-content">
        <SpeedCutModule />
      </div>
    </div>
  );
}

export default Main;