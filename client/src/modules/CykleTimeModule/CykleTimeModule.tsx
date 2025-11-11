import React from 'react';
import { cykleTime_API } from '../API';

function CykleTimeModule(): React.JSX.Element {
    const [result, setResult] = React.useState<number | null>(null);    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const calTime = formData.get("calculateTime");
        const couPiec = formData.get("countPieces");

        if (calTime && couPiec) {
            const formData = {
                calTime: calTime.toString(),
                couPiec: couPiec.toString()
            }
            cykleTime_API(formData)
                .then(res => {
                    console.log(res);
                    setResult(res ? res.message : null);
                }).catch(err => {
                    console.error(err);
                })
        }
    }

    return (
        <div className="cykleTimeModule">
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
                <div className="formContainer">
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
                            defaultValue={60} />
                        <label
                            htmlFor="countPieces">
                            Počet dielov:
                        </label>
                        <input
                            id="countPieces"
                            name="countPieces" />
                        <button
                            type="submit">
                            Prepočet
                        </button>
                    </form>
                    <div>
                        <p>Výsledok: {result !== null ? result : "čaká na výpočet"}</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CykleTimeModule;