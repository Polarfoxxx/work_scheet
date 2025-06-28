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
      <h1>Welcome to the Main Module</h1>
      <div className="form-container">
        <form
          action="#"
          onSubmit={e => handleSubmit(e)}>
          <label
            htmlFor="diametro">
            Vonkajší priemer BK:
          </label>
          <input
            type="number"
            id="diametro"
            name="diametro" />
          <label
            htmlFor="cutspeed">
            Rezná rýchlosť:
          </label>
          <input
            type="number"
            id="cutspeed"
            name="cutspeed"
            defaultValue={52} />
          <button
            type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="result">
        <div>
          <span>
            Výsledné otačky:
          </span>
        </div>
        <div>
          {returnedSpeed}
          <span>
            m/min
          </span>
        </div>
      </div>
      <p>This is the main content area.</p>
    </div>
  );
}


export default SpeedCutModule;