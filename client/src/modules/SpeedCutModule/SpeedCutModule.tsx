import React from "react";
import "./style/speedCutModule_style.css"
import {
  IntroComponent,
  SpeedOfRotationComponent,
  CutSpeedComponent
} from "./Components";

function SpeedCutModule(): React.JSX.Element {

  return (
    <div className="speed-cut-module">
      <header>
        <h1>Výpočet renzej rýchlosti alebo otáčok</h1>
      </header>
      <main>
        <div className="introComponent">
          <IntroComponent />
        </div>
        <div className="calculationComponents">
          <div className="speedOfRotationComponent">
            <SpeedOfRotationComponent />
          </div>
          <div className="cutSpeedComponent">
            <CutSpeedComponent />
          </div>
        </div>
      </main >
    </div >
  );
}


export default SpeedCutModule;




