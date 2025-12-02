import React from "react";
import { cutSpeed_API } from "../../../API";
import "./style/cutSpeedomponent_style.css"

function CutSpeedComponent() {
  const [returnedCutSpeed, setreturnedCutSpeed] = React.useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const diametro = formData.get("diametro");
    const speedOfRotation = formData.get("speedOfRotation");

    if (diametro && speedOfRotation) {
      const formData = {
        speedOfRotation: speedOfRotation.toString(),
        diametro: diametro.toString()
      }
      cutSpeed_API(formData)
        .then(res => {
          setreturnedCutSpeed(res ? res.message : 0);
        }).catch(err => {
          console.error(err);
        })
    }
  }

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



