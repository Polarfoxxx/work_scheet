import React from "react"
import { grindWhellLife_API } from "../API";
import "./style/grindWhellLife_style.css";
import { Type_forReturned_API } from "../API";


function GrindWhellLifeModule(): React.JSX.Element {
    const [whellLife, setWhellLife] = React.useState<Type_forReturned_API["data"]["message"] | null>(null);
    const [onhecked, setOnhecked] = React.useState<boolean>(false);
    const [n_sharpening, setN_sharpening] = React.useState<number | undefined>(undefined);
    const [x_sharpening, setX_sharpening] = React.useState<number | undefined>(undefined);

    const fetchWhellLife = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const payload = {
            maxWhell: Number(formData.maxWhell),
            minWhell: Number(formData.minWhell),
            n_sharpening: Number(n_sharpening),
            x_sharpening: Number(x_sharpening),
            cykleTime: Number(formData.cykleTime),
            productionMystake: Number(formData.productionMystake),
            duoGrinding: onhecked
        };

        if (payload.maxWhell && payload.minWhell && payload.n_sharpening && payload.x_sharpening) {
            try {
                const response = await grindWhellLife_API(payload);
                response?.status === 200 ?
                    setWhellLife(response.data.message) :
                    setWhellLife(null)
            } catch (err) {
                console.error("Error calling Grind Whell Life API:", err);
            }
        } else {
            alert("Proím vyplnit všechna pole formuláře.");
        }
    };

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOnhecked(e.target.checked);
        console.log(e.target.checked);
    }

    return (
        <div className="grindWhellModule">
            <header>
                <h1>Životnosť kotúča</h1>
            </header>
            <main>
                <div className="grindWhellContent">
                    <div className="formContainer">
                        <div className="formHeader">
                            <h4>Formulár výpočtu</h4>
                        </div>
                        <form action="#" onSubmit={(e) => fetchWhellLife(e)}>
                            <div className="formBody">
                                <div className="formlockOne">
                                    <div className="formContainer">
                                        <label htmlFor="maxWhell">Maximálna veľkosť BK</label>
                                        <input id="maxWhell" name="maxWhell" type="number" min={0} step={0.1} placeholder="Veľkosť veľkého BK" />
                                    </div>
                                    <div className="formContainer">
                                        <label htmlFor="minWhell">Minimálna veľkosť BK</label>
                                        <input id="minWhell" name="minWhell" type="number" min={0} step={0.1} placeholder="Veľkosť malého BK" />
                                    </div>
                                    <div className="formContainer">
                                        <label htmlFor="n_sharpening">Orovnávaci cyklus n-diely</label>
                                        <input id="n_sharpening" type="range" min="0" max="400" step={0.1} value={n_sharpening} onChange={e => { setN_sharpening(Number(e.target.value)) }} />
                                        <div>
                                            <input value={n_sharpening} type="number" placeholder="Orovnať po N dieloch" onChange={e => { setN_sharpening(Number(e.target.value)) }} />
                                        </div>
                                    </div>
                                    <div className="formContainer">
                                        <label htmlFor="x_sharpening">Hodnota orovnávania x</label>
                                        <input id="x_sharpening" type="range" min="0" max="100" step={0.1} value={x_sharpening} onChange={e => { setX_sharpening(Number(e.target.value)) }} />
                                        <div>
                                            <input value={x_sharpening} type="number" placeholder="Veľkosť orovnania" onChange={e => { setX_sharpening(Number(e.target.value)) }} />
                                        </div>
                                        <div className="formContainer checkBox">
                                            <label htmlFor="someCheckbox">Brúsenie po 2 ks</label>
                                            <input id="someCheckbox" type="checkbox" checked={onhecked} onChange={handleChecked} />
                                        </div>
                                    </div>

                                </div>
                                {/* .+---------- */}
                                <div className="formlockOne">
                                    <div className="formContainer">
                                        <label htmlFor="cykleTime">Cyklový čas</label>
                                        <input id="cykleTime" name="cykleTime" min={0} step={0.1} type="number" placeholder="Čas cyklu v minutách" />
                                    </div>
                                    <div className="formContainer">
                                        <label htmlFor="productionMystake">Chyba nastavenia</label>
                                        <input id="productionMystake" name="productionMystake" step={0.1} min={0} max={100} type="number" placeholder="Chyba nastavenia v %" />
                                    </div>
                                    <div className="formButton">
                                        <button type="submit">Get grind whell life</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="calculateBlock">
                        <div className="calculateHeader">
                            <h4>Vzorec pre výpočet</h4>
                        </div>
                        <div className="calculateBody">
                            <div className="calculateBodyContent">
                                <div>
                                    <p></p>
                                </div>
                                <div>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resultBlock">
                    <div className="resultBlockOne">
                        <div className="resultBlockHeader">
                        </div>
                        <div className="resultBlockBody">
                            <div>
                                <h4>Výpečet</h4>
                            </div>
                            <div>
                                {
                                    whellLife !== null
                                        ?
                                        <div>
                                            <h4>
                                                {whellLife.lifePerSharpening}
                                            </h4>
                                            <h4>
                                                {whellLife.wearPerSharpening}
                                            </h4>
                                        </div>
                                        :
                                        <div>
                                            <h4>
                                                nic
                                            </h4>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="resultBlockTwo">

                    </div>
                </div>
            </main>
        </div>
    )
}

export default GrindWhellLifeModule;