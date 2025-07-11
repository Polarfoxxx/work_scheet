import React from "react";
import "./style/speedCutModule_style.css"
import { cutSpeedFunction_services } from "../services";

function SpeedCutModule(): React.JSX.Element {
  const [returnedSpeed, setreturnedSpeed] = React.useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const diametro = formData.get("diametro");
    const cutSpeed = formData.get("cutspeed");

    if (diametro && cutSpeed) {
      const speed = cutSpeedFunction_services(+diametro, +cutSpeed)
      setreturnedSpeed(speed);
    }
  }

  return (
    <div className="speed-cut-module">
      <div className="cut-speed-header">
        <h1>Welcome to the Main Module</h1>
      </div>
      <div className="form-container">
        <form
          action="#"
          onSubmit={e => handleSubmit(e)}>
          <label
            htmlFor="diametro">
            Vonkajší priemer BK:
          </label>
          <input
            id="diametro"
            name="diametro" />
          <label
            htmlFor="cutspeed">
            Rezná rýchlosť:
          </label>
          <input
            id="cutspeed"
            name="cutspeed"
            defaultValue={52} />
          <button
            type="submit">
            Prepočet
          </button>
        </form>
      </div>
      {/* výsledok ......................................*/}
      <div className="result">
        <div className="result-text">
          <span>
            Výsledné otačky:
          </span>
        </div>
        <div className="result-speed">
          {returnedSpeed}
          <span>
            m/min
          </span>
        </div>
      </div>
      <div className="cut-speed-footer">
        <p>This is the main content area.</p>
      </div>
    </div>
  );
}


export default SpeedCutModule;