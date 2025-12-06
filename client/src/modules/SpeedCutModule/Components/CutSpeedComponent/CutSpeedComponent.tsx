import React from "react";
import { cutSpeed_API } from "../../../API";
import "./style/cutSpeedomponent_style.css"

function CutSpeedComponent() {
  const [returnedCutSpeed, setreturnedCutSpeed] = React.useState<number>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const payload = {
      diametro: Number(formData.diametro ?? 0),
      speedOfRotation: Number(formData.speedOfRotation ?? 0)
    };

    if (payload.diametro && payload.speedOfRotation) {
      try {
        const result = await cutSpeed_API(payload);
        result?.message !== undefined
          ? setreturnedCutSpeed(result.message)
          : setreturnedCutSpeed(0);
      } catch (err) {
        console.error("Error calling Cut Speed API:", err);
      }
    } else {
      alert("Prosím vyplňte všetky polia správne.")
    }
  };

  return (
    <div className="speed-cut-component">
      <header>
        <h1>
          Výpočet rezej rýchlosti na základe otáčok a vonkajšieho priemeru BK
        </h1>
      </header>
      <main>
        <div className="form-container">
          <form action="#" onSubmit={e => handleSubmit(e)}>
            <label htmlFor="diametro">
              Vonkajší priemer BK:
            </label>
            <input id="diametro" name="diametro" />
            <label htmlFor="speedOfRotation">
              Otáčky:
            </label>
            <input id="speedOfRotation"
              name="speedOfRotation" />
            <button type="submit">
              Prepočet
            </button>
          </form>
        </div>
        <div className="formula-container">
          <div className="formula-header">
            <h4>Vzorec pre výpočet</h4>
          </div>
          <div className="formula-body">
            <span>V = výsledna rezná rýchlosť</span>
            <span>n = otáčky vretena</span>
            <span>D = vonkajší priemer BK</span>
            <span>V = ((D*π) * n)/60000 </span>
          </div>
        </div>
      </main>
      {/* výsledok ......................................*/}
      <article>
        <div className="result">
          <div className="result-text">
            <span>
              Výsledná rezná rychlosť je:
            </span>
          </div>
          <div className="result-speed">
            {returnedCutSpeed}
            <span>
              m/min
            </span>
          </div>
        </div>
      </article>
    </div>
  )
}

export default CutSpeedComponent;



