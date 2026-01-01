import React from 'react';
import { cykleTime_API } from '../API';
import './style/cykleTimeModule_style.css';
import { Type_for_cykleTime_response } from '../API/cykleTime/cykleTime_API';
import { PageHeaderComponent } from '../services';

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
            calTime: Number(formData.calculateTime),
            couPiec: Number(formData.countPieces),
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
            <PageHeaderComponent headerTitle={"Výpočet cyklového času"} />
            <main>
                <div className='formContentAndInfoContent'>
                    <div className="formContainer">
                        <form
                            action="#"
                            onSubmit={e => handleSubmit(e)}>
                            <div className='formHeaderBlock'>
                                <h4>Formulár prepočtu</h4>
                            </div>
                            <div className='formTimeBlock'>
                                <label
                                    htmlFor="calculateTime">
                                    Meraný čas počas ktorého je počítane množstvo opracovaných dielov
                                </label>
                                <input
                                    id="calculateTime"
                                    name="calculateTime"
                                    placeholder='meraný čas v sec'
                                />
                            </div>
                            <div className='formPieceBlock'>
                                <label
                                    htmlFor="countPieces">
                                    Počet vyprodukovaných dielov počas meraného časoveho úseku
                                </label>
                                <input
                                    id="countPieces"
                                    name="countPieces"
                                    placeholder='počet dielov' />
                            </div>
                            <div className='formButtonBlock'>
                                <button
                                    type="submit">
                                    Prepočet
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='calculateInfoBlock'>
                        <div className='claculateMain'>
                            <div className='calculateHeader'>
                                <h4>
                                    Vzorec pre výpočet:
                                </h4>
                            </div>
                            <article>
                                <div className='formsBlock'>
                                    <div className='formsTitle'>
                                        <h4>Vzorec</h4>
                                    </div>
                                    <div className='formBody'>
                                        <div className='calcBlock one'>
                                            <p>Pocet dielov = n za čas = t v sekunách</p>
                                        </div>
                                        <div className='calcBlock two'>
                                            <p>t / n = tn - čas na jeden diel v sekundách</p>
                                        </div>
                                        <div className='calcBlock three'>
                                            <p>tn / 60 = Výsledný takt v min</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='examleForms'>
                                    <div className='exampleTitle'>
                                        <h4>Príklad prepočtu</h4>
                                    </div>
                                    <div className='examleBopdy'>
                                        <div className='calcBlock four'>
                                            <p>Pocet dielov = 10 za čas = 60s</p>
                                        </div>
                                        <div className='calcBlock five'>
                                            <p>60/10 = 6s</p>
                                        </div>
                                        <div className='calcBlock six'>
                                            <p>6/60 = 0,1s</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>

                <div className='resultBlock'>
                    <div className='resultHeader'>
                        <h4>Výsledny prepočet</h4>
                    </div>
                    <div className='resultMain'>
                        {
                            result && (
                                <div className="resultContainer">
                                    <div className='resultMainResult'>
                                        <p className='titleRes'>Dielou za 1 minútu</p>
                                        <p className='titleValue'>{Math.round(result.thisCykle * 1000) / 1000}</p>
                                    </div>
                                    <div className='resultother'>
                                        <div>
                                            <h4>Dielou za 30 minút:</h4>
                                            <p>{result.halfHourCykle} dielov</p>
                                        </div>

                                        <div>
                                            <h4>Dielou za 1 hodinu:</h4>
                                            <p>{result.onehourCykle} dielov</p>
                                        </div>

                                        <div>
                                            <h4>Dielou za 2 hodiny:</h4>
                                            <p>{result.twoohourCykle} dielov</p>
                                        </div>

                                        <div>
                                            <h4>Dielou za 3 hodiny:</h4>
                                            <p>{result.threehourCykle} dielov</p>
                                        </div>

                                        <div>
                                            <h4>Dielou za 4 hodiny:</h4>
                                            <p>{result.fourhourCykle} dielov</p>
                                        </div>

                                        <div>
                                            <h4>Dielou za 5 hodín:</h4>
                                            <p>{result.fivehourCykle} dielov</p>
                                        </div>

                                        <div>
                                            <h4>Dielou za 6 hodín:</h4>
                                            <p>{result.sixHourCykle} dielov</p>
                                        </div>

                                        <div>
                                            <h4>Dielou za 7 hodín:</h4>
                                            <p>{result.sevenHourCykle} dielov</p>
                                        </div>

                                        <div>
                                            <h4>Dielou za 8 hodín:</h4>
                                            <p>{result.eightHourCykle} dielov</p>
                                        </div>
                                    </div>
                                    <div className='resultGraph'>
                                        infograph
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CykleTimeModule;