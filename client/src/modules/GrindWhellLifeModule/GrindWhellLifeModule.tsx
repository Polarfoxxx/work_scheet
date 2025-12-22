import React from "react"
import { grindWhellLife_API } from "../API";
import "./style/grindWhellLife_style.css";

function GrindWhellLifeModule(): React.JSX.Element {
    const [whellLife, setWhellLife] = React.useState<any>(null);
    const [onhecked, setOnhecked] = React.useState<boolean>(false);
    const [n_sharpening, setN_sharpening] = React.useState<number>(0);
    const [x_sharpening, setX_sharpening] = React.useState<number>(0);

    const fetchWhellLife = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const payload = {
            maxWhell: Number(formData.maxWhell ?? 0),
            minWhell: Number(formData.minWhell ?? 0),
            n_sharpening: Number(formData.n_sharpening ?? 0),
            v_sharpening: Number(formData.n_sharpening ?? 0),
        };

        if (payload.maxWhell && payload.minWhell && payload.n_sharpening && payload.v_sharpening) {
            try {
                const result = await grindWhellLife_API(payload);
                result?.message !== undefined ?
                    setWhellLife(result.message) :
                    setWhellLife(0)
                console.log("API response:", result);
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
                            <div className="formContainer">
                                <label htmlFor="maxWhell">Veľkosť brúsneho kotúča pri maximálnej veľkosti</label>
                                <input id="maxWhell" name="maxWhell" type="number" />
                            </div>
                            <div>
                                <label htmlFor="minWhell">Veľkosť brúsneho kotúča pri minimálnej veľkosti</label>
                                <input id="minWhell" name="minWhell" type="number" />
                            </div>
                            <div>
                                <label htmlFor="n_sharpening">Cyklus orovnania brúsneho kotúča n-diely</label>
                                <input
                                    id="n_sharpening"
                                    type="range"
                                    min="0" max="100"
                                    value={n_sharpening}
                                    onChange={e => { setN_sharpening(Number(e.target.value)) }} />
                                <div>
                                    <input
                                        value={n_sharpening} type="number"
                                        onChange={e => { setN_sharpening(Number(e.target.value)) }} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="x_sharpening">Hodnota orovnávania</label>
                                <input
                                    id="x_sharpening"
                                    type="range"
                                    min="0" max="100"
                                    value={x_sharpening}
                                    onChange={e => { setX_sharpening(Number(e.target.value)) }} />
                                <div>
                                    <input
                                        value={x_sharpening} type="number"
                                        onChange={e => { setX_sharpening(Number(e.target.value)) }} />
                                </div>
                                <label htmlFor="someCheckbox">2 kus</label>
                                <input id="someCheckbox" type="checkbox" checked={onhecked} onChange={handleChecked} />
                            </div>
                            <button type="submit">Get grind whell life</button>
                        </form>
                    </div>
                    <div className="resultBlock">
                        <div className="resultBlockHeader">
                            <h4>Vzorec pre výpočet</h4>
                        </div>
                        <div className="resultBlockBody">

                        </div>
                    </div>
                </div>
                <div>
                    fewfewfefefe
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default GrindWhellLifeModule