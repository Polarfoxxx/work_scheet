import React from "react"
import { grindWhellLife_API } from "../API";
import "./style/grindWhellLife_style.css";
import { Type_forReturned_API } from "../API";


function GrindWhellLifeModule(): React.JSX.Element {
    const [whellLife, setWhellLife] = React.useState<Type_forReturned_API["data"]["message"] | null>(null);
    const [onhecked, setOnhecked] = React.useState<boolean>(false);
    const [n_sharpening, setN_sharpening] = React.useState<number>(0);
    const [x_sharpening, setX_sharpening] = React.useState<number>(0);

    const fetchWhellLife = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const payload = {
            maxWhell: Number(formData.maxWhell),
            minWhell: Number(formData.minWhell),
            n_sharpening: Number(n_sharpening),
            x_sharpening: Number(x_sharpening),
            cykleTime: Number(formData.cykleTime),
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
                                        <label htmlFor="maxWhell">Veľkosť brúsneho kotúča pri maximálnej veľkosti</label>
                                        <input id="maxWhell" name="maxWhell" type="number" min={0} />
                                    </div>
                                    <div className="formContainer">
                                        <label htmlFor="minWhell">Veľkosť brúsneho kotúča pri minimálnej veľkosti</label>
                                        <input id="minWhell" name="minWhell" type="number" min={0} />
                                    </div>
                                    <div className="formContainer">
                                        <label htmlFor="n_sharpening">Cyklus orovnania brúsneho kotúča n-diely</label>
                                        <input id="n_sharpening" type="range" min="0" max="500" value={n_sharpening} onChange={e => { setN_sharpening(Number(e.target.value)) }} />
                                        <div>
                                            <input value={n_sharpening} type="number" onChange={e => { setN_sharpening(Number(e.target.value)) }} />
                                        </div>
                                    </div>
                                    <div className="formContainer">
                                        <label htmlFor="x_sharpening">Hodnota orovnávania</label>
                                        <input id="x_sharpening" type="range" min="0" max="100" value={x_sharpening} onChange={e => { setX_sharpening(Number(e.target.value)) }} />
                                        <div>
                                            <input value={x_sharpening} type="number" onChange={e => { setX_sharpening(Number(e.target.value)) }} />
                                        </div>
                                        <label htmlFor="someCheckbox">2 kus</label>
                                        <input id="someCheckbox" type="checkbox" checked={onhecked} onChange={handleChecked} />
                                    </div>
                                </div>
                                {/* .+---------- */}
                                <div className="formlockOne">
                                    <div className="formContainer">
                                        <label htmlFor="cykleTime">Cyklový čas</label>
                                        <input id="cykleTime" name="cykleTime" min={0} type="number" />
                                    </div>
                                    <div className="formContainer">
                                        <label htmlFor="productionMystake">Chyba nastavenia</label>
                                        <input id="productionMystake" name="productionMystake" min={0} type="number" />
                                    </div>
                                    <div className="formContainer">
                                        <label htmlFor="">Cyklus orovnania brúsneho kotúča n-diely</label>
                                        <input id="" type="range" min="0" max="100" value={n_sharpening} onChange={e => { setN_sharpening(Number(e.target.value)) }} />
                                        <div>
                                            <input value={n_sharpening} type="number" onChange={e => { setN_sharpening(Number(e.target.value)) }} />
                                        </div>
                                    </div>
                                    <div className="formContainer">
                                        <label htmlFor="">Hodnota orovnávania</label>
                                        <input id="" type="range" min="0" max="100" value={x_sharpening} onChange={e => { setX_sharpening(Number(e.target.value)) }} />
                                        <div>
                                            <input value={x_sharpening} type="number" onChange={e => { setX_sharpening(Number(e.target.value)) }} />
                                        </div>
                                        <label htmlFor="">2 kus</label>
                                        <input id="" type="checkbox" checked={onhecked} onChange={handleChecked} />
                                    </div>
                                </div>
                            </div>
                            <div className="formButton">
                                <button type="submit">Get grind whell life</button>
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

                                </div>
                                <div>

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