import React from "react"
import { grindWhellLife_API } from "../API";
import "./style/grindWhellLife_style.css";

function GrindWhellLifeModule(): React.JSX.Element {
    const [whellLife, setWhellLife] = React.useState<any>(null);
    const [onhecked, setOnhecked] = React.useState<boolean>(false);
    const [typeinp, setTypeinp] = React.useState<number>(0);

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
                    <div >
                        <form action="#" onSubmit={(e) => fetchWhellLife(e)}>
                            <div>
                                <label htmlFor="maxWhell">maxWhell</label>
                                <input id="maxWhell" name="maxWhell" type="number" />
                            </div>
                            <div>
                                <label htmlFor="minWhell">mixWhell</label>
                                <input id="minWhell" name="minWhell" type="number" />
                            </div>
                            <div>
                                <label htmlFor="n_sharpening">n_sharpening</label>
                                <input id="n_sharpening" name="n_sharpening" type="number" />
                            </div>
                            <div>
                                <label htmlFor="v_sharpening">v_sharpening</label>
                                <input id="v_sharpening" name="v_sharpening" type="number" step={0.001} />
                            </div>
                            <div>
                                <label htmlFor="someCheckbox">2 kus</label>
                                <input id="someCheckbox" type="checkbox" checked={onhecked} onChange={handleChecked} />
                            </div>
                            <button type="submit">Get grind whell life</button>
                        </form>
                    </div>
                    <div>
                        <form action="#" onSubmit={(e) => fetchWhellLife(e)}>
                            <div>
                                <label htmlFor="maxWhell">maxWhell</label>
                                <input id="maxWhell" name="maxWhell" type="number" />
                            </div>
                            <div>
                                <label htmlFor="minWhell">mixWhell</label>
                                <input id="minWhell" name="minWhell" type="number" />
                            </div>
                            <div>
                                <label htmlFor="n_sharpening">n_sharpening</label>
                                <input
                                    id="typeinp"
                                    type="range"
                                    min="0" max="100"
                                    value={typeinp}
                                    onChange={e => { setTypeinp(Number(e.target.value)) }} />
                                <input id="n_sharpening" name="n_sharpening" type="number"
                                    step="1" />
                                <div>
                                    <input
                                        value={typeinp} type="number"
                                        onChange={e => { setTypeinp(Number(e.target.value)) }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="v_sharpening">v_sharpening</label>
                                <input id="v_sharpening" name="v_sharpening" type="number" step={0.001} />
                            </div>
                            <div>
                                <label htmlFor="someCheckbox">2 kus</label>
                                <input id="someCheckbox" type="checkbox" checked={onhecked} onChange={handleChecked} />
                            </div>
                            <button type="submit">Get grind whell life</button>
                        </form>
                    </div>
                    <div>
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