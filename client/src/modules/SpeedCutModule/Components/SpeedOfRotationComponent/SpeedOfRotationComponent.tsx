import React from "react";
import { speed_of_rotation_API } from "../../../API";
import "./style/speedOfRotationComponent_style.css"


function SpeedOfRotationComponent() {
  const [returnedSpeed, setreturnedSpeed] = React.useState<number>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const payload = {
      diametro: Number(formData.diametro ?? 0),
      cutSpeed: Number(formData.cutspeed ?? 0)
    };

    if (payload.diametro && payload.cutSpeed) {
      try {
        const result = await speed_of_rotation_API(payload)
        result?.message !== undefined
          ? setreturnedSpeed(result.message)
          : setreturnedSpeed(0);
      } catch (err) {
        console.error("Error calling Speed of Rotation API:", err);
      };
    } else {
      alert("Prosím vyplňte všetky polia správne.");
    };
  };

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
        <div className="formula-container">
          <div className="formula-header">
            <h4>Vzorec pre výpočet</h4>
          </div>
          <div className="formula-body">
            <span>n = výsledne otáčky</span>
            <span>V = požadovaná rezná rýchlosť</span>
            <span>D = vonkajší priemer BK</span>
            <span>n = (V * 60) / (D / 1000) * π</span>
          </div>
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
              ot./min
            </span>
          </div>
        </div>
      </article>
    </div>
  )
}

export default SpeedOfRotationComponent;



