import React from 'react';
import { cykleTime_API } from '../API';
import './style/cykleTimeModule_style.css';
import { Type_for_cykleTime_response } from '../API/cykleTime/cykleTime_API';

function CykleTimeModule(): React.JSX.Element {
    const [result, setResult] = React.useState<Type_for_cykleTime_response | undefined>({
        thisCykle: 0,
        halfHourCykle: 0,
        onehourCykle: 0,
        twoohourCykle: 0,
        threehourCykle: 0,
        fourhourCykle: 0,
        fivehourCykle: 0,
        sixHourCykle: 0,
        sevenHourCykle: 0,
        eightHourCykle: 0,
    }
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const payload = {
            calTime: Number(formData.calculateTime ?? 0),
            couPiec: Number(formData.countPieces ?? 0),
        };

        if (payload.calTime && payload.couPiec) {
            try {
                const response = await cykleTime_API(payload);
                response?.message !== undefined ?
                    setResult(response.message) :
                    setResult(undefined);
                console.log("API response:", response);
            } catch (err) {
                console.error("Error calling Cykle Time API:", err);
            }
        } else {
            alert("Proím vyplnit všechna pole formuláře.");
        };
    };


    return (
        <div className="cykleTimeModule">
            <header>
                <h1>
                    Cykly za čas
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
                </div>
                <div>
                    <div>
                        <article>
                            pocet dielov za 1min
                            5 ks = 1min
                            60/5 = 12s   = 12/60 = 0.2min

                            1/0,2 = 5ks
                            60/12 = 5ks
                        </article>
                    </div>
                </div>
                <div>
                    <div>
                        {
                            result && (
                                <div className="resultContainer">
                                    <p>Cyklov za 1 minútu: {result.thisCykle}</p>
                                    <p>Cyklov za 30 minút: {result.halfHourCykle}</p>
                                    <p>Cyklov za 1 hodinu: {result.onehourCykle}</p>
                                    <p>Cyklov za 2 hodiny: {result.twoohourCykle}</p>
                                    <p>Cyklov za 3 hodiny: {result.threehourCykle}</p>
                                    <p>Cyklov za 4 hodiny: {result.fourhourCykle}</p>
                                    <p>Cyklov za 5 hodín: {result.fivehourCykle}</p>
                                    <p>Cyklov za 6 hodín: {result.sixHourCykle}</p>
                                    <p>Cyklov za 7 hodín: {result.sevenHourCykle}</p>
                                    <p>Cyklov za 8 hodín: {result.eightHourCykle}</p>
                                </div>
                            )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CykleTimeModule;