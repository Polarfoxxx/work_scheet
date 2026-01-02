import React from "react"
import { grindWhellLife_API } from "../API";
import "./style/grindWhellLife_style.css";
import { Type_forReturned_API } from "../API";
import { PageHeaderComponent } from "../services";


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
            <PageHeaderComponent headerTitle={"Výpočet životnosti brúsneho kotúča"} />
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
                                        <label htmlFor="maxWhell">Maximálna veľkosť BK - Dmax</label>
                                        <input id="maxWhell" name="maxWhell" type="number" min={0} step={0.1} placeholder="Veľkosť veľkého BK" />
                                    </div>
                                    <div className="formContainer">
                                        <label htmlFor="minWhell">Minimálna veľkosť BK - Dmin</label>
                                        <input id="minWhell" name="minWhell" type="number" min={0} step={0.1} placeholder="Veľkosť malého BK" />
                                    </div>
                                    <div className="formContainer">
                                        <label htmlFor="n_sharpening">Orovnávaci cyklus - n-diely</label>
                                        <input id="n_sharpening" type="range" min="0" max="400" step={1} value={n_sharpening} onChange={e => { setN_sharpening(Number(e.target.value)) }} />
                                        <div>
                                            <input value={n_sharpening} type="number" placeholder="Orovnať po N dieloch" onChange={e => { setN_sharpening(Number(e.target.value)) }} />
                                        </div>
                                    </div>
                                    <div className="formContainer">
                                        <label htmlFor="x_sharpening">Hodnota orovnávania - Xvalue</label>
                                        <input id="x_sharpening" type="range" min="0" max="0.1" step={0.001} value={x_sharpening} onChange={e => { setX_sharpening(Number(e.target.value)) }} />
                                        <div>
                                            <input value={x_sharpening} type="number" min="0" max="0.1" step={0.001} placeholder="Veľkosť orovnania" onChange={e => { setX_sharpening(Number(e.target.value)) }} />
                                        </div>
                                    </div>
                                </div>
                                {/* .+---------- */}
                                <div className="formlockOne">
                                    <div className="formContainer">
                                        <label htmlFor="cykleTime">Cyklový čas - tkz</label>
                                        <input id="cykleTime" name="cykleTime" min={0} step={0.1} type="number" placeholder="Čas cyklu v minutách" />
                                    </div>
                                    <div className="formContainer">
                                        <label htmlFor="productionMystake">Chyba nastavenia - Er</label>
                                        <input id="productionMystake" name="productionMystake" step={0.1} min={0} max={100} type="number" placeholder="Chyba nastavenia v %" />
                                    </div>
                                    <div className="formContainer checkBox">
                                        <label htmlFor="someCheckbox">Brúsenie po 2 ks</label>
                                        <input id="someCheckbox" type="checkbox" checked={onhecked} onChange={handleChecked} />
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
                                    <p>Brúsny kotúč veľký rozmer Dmax - Brúsny kotúč min rozmer Dmin = Funkčny hodnota P_value</p>
                                </div>
                                <div>
                                    <p>Funkčny hodnota P_value / Hodnota úberu Xvalue = Počet možných orovnaní Sh_value</p>
                                </div>
                                 <div>
                                    <p>Počet možných orovnaní Sh_value * Orovnávací cyklus n-diely = Počet vyprodukovaných dielov na životnoť brúsneho kotúča PROD_value</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resultBlock">
                    <div className="resultBlockHeader">
                        <div>
                            <h4>Výpočet</h4>
                        </div>
                    </div>
                    <div className="resultBlockBody">
                        <div className="resultBlock numberBlock">
                            <div className="resBlock One">
                                <div className="resTitle">
                                    <h3>Počet orovnávania:</h3>
                                </div>
                                <div className="resValue">
                                    <p>{whellLife?.wearPerSharpening ? whellLife.wearPerSharpening : ""}</p>
                                </div>
                                <div className="resUnit">
                                    <p>orovnaní</p>
                                </div>
                            </div >
                            <div className="resBlock two">
                                <div className="resTitle">
                                    <h3>Životnosť kotúča na n počet dielov:</h3>
                                </div>
                                <div className="resValue">
                                    <p>{whellLife?.lifePerSharpening ? whellLife.lifePerSharpening : ""}</p>
                                </div>
                                <div className="resUnit">
                                    <p>dielou</p>
                                </div>
                            </div>
                            <div className="resBlock three">
                                <div className="resTitle">
                                    <h3>Životnosť kotúča podľa času:</h3>
                                </div>
                                <div className="resValue">
                                    <p>{whellLife?.lifePerSharpening ? whellLife.lifePerSharpening : ""}</p>
                                </div>
                                <div className="resUnit">
                                    <p>dielou</p>
                                </div>
                            </div>
                            <div className="resBlock four">
                                <div className="resTitle">
                                    <h3>Životnosť kotúča na zmeny:</h3>
                                </div>
                                <div className="resValue">
                                    <p>{whellLife?.lifePerSharpening ? whellLife.lifePerSharpening : ""}</p>
                                </div>
                                <div className="resUnit">
                                    <p>dielou</p>
                                </div>
                            </div>
                             <div className="resBlock four">
                                <div className="resTitle">
                                    <h3>S chybov:</h3>
                                </div>
                                <div className="resValue">
                                    <p>{whellLife?.withMystake ? "s chybou" : "bez chyby"}</p>
                                </div>
                                <div className="resUnit">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="resultBlock two">
                            <div className="">
                                <h1>graf</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default GrindWhellLifeModule;