import React from 'react';
import { cykleTime_API } from '../API';
import MainInOwned from './../ServicesModule/Components/MainInOwned/MainInOwned';

function CykleTimeModule(): React.JSX.Element {

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
      cykleTime_API(formData)
        .then(res => {
        }).catch(err => {
          console.error(err);
        })
    }
  }

  return (
    <div className="speed-cut-component">
      <header>
        <h1>
          pocet dielov za 1min 
          5 ks = 1min
           60/5 = 12s   = 12/60 = 0.2min

            1/0,2 = 5ks
            60/12 = 5ks
        </h1>

      </header>
      <main>
        <div className="form-container">
          <form
            action="#"
            onSubmit={e => handleSubmit(e)}>
            <label
              htmlFor="calculateTime">
              Meraný čas:
            </label>
            <input
              id="calculateTime"
              name="calculateTime"
              defaultValue={60}/>
            <label
              htmlFor="countPieces">
              Rezná rýchlosť:
            </label>
            <input
              id="countPieces"
              name="countPieces" />
            <button
              type="submit">
              Prepočet
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CykleTimeModule;