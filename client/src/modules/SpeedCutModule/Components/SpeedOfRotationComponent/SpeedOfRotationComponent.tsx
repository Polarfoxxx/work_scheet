import React from "react";
import { cutSpeed_API } from "../../../API";
import "./style/speedOfRotationComponent_style.css"


function SpeedOfRotationComponent() {
  const [returnedSpeed, setreturnedSpeed] = React.useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const diametro = formData.get("diametro");
    const cutSpeed = formData.get("cutspeed");

    if (diametro && cutSpeed) {
      const formData = {
        cutSpeed: cutSpeed.toString(),
        diametro: diametro.toString()
      }
      cutSpeed_API(formData)
        .then(res => {
          setreturnedSpeed(res ? res.message : 0);
        }).catch(err => {
          console.error(err);
        })
    }
  }

  return (
    <div className="speed-of-rotation">
      <header>
        <h1>
          Výpočet otáčok na základe rezej rýchlosti a vonkajšieho priemeru BK
        </h1>
      </header>
      <main>
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
      </main>
      {/* výsledok ......................................*/}
      <article>
        <div className="result">
          <div className="result-text">
            <span>
              Výsledné otáčky:
            </span>
          </div>
          <div className="result-speed">
            {returnedSpeed}
            <span>
              m/min
            </span>
          </div>
        </div>
      </article>
    </div>
  )
}

export default SpeedOfRotationComponent;



