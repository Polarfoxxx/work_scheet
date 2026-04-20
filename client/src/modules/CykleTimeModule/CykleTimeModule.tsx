import React from 'react';
import { cykleTime_API } from '../API';
import './style/cykleTimeModule_style.css';
import { Type_for_cykleTime_response } from '../API/cykleTime/cykleTime_API';
import { PageHeaderComponent } from '../services';
import { useContext } from 'react';
import { ContainerProvider } from '../Container';
import { TimeItem } from './Components';


function CykleTimeModule(): React.JSX.Element {
    const { provideDATA, setProvideDATA } = useContext(ContainerProvider.Context);
    const [result, setResult] = React.useState<Type_for_cykleTime_response | undefined>([]);

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
                if (response?.message !== undefined) {
                    setResult(response.message)
                    setProvideDATA({
                        ...provideDATA,
                        display_setting: {
                            ...provideDATA.display_setting,
                            scroolScreen: 700
                        }
                    })
                } else {
                    setResult(undefined);
                }
                console.log("API response:", response);
            } catch (err) {
                console.error("Error calling Cykle Time API:", err);
            }

        } else {
            alert("Proím vyplnit všechna pole formuláře.");
        };
    };




    return (
        <div
            className="cykleTimeModule">
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
                                    Meraný čas pre výpočet
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
                                    Počet vyprodukovaných dielov počas meranej hodnoty
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
                            result && result.map((item: any) => (
                                <div className="resultContainer" key={item.nameCykle}>
                                    <div className='resultMainResult'>
                                        <p className='titleRes'>{item.value}</p>
                                        <p className='titleValue'>{item.nameCykle}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CykleTimeModule;