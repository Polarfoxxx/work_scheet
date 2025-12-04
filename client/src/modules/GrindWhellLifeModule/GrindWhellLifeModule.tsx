import React from "react"
import { grindWhellLife_API } from "../API";
import "./style/grindWhellLife_style.css";

function GrindWhellLifeModule(): React.JSX.Element {
    const [whellLife, setWhellLife] = React.useState<any>(null);
    const [onhecked, setOnhecked] = React.useState<boolean>(false);
    const [typeinp, setTypeinp] = React.useState<number>(0);

    const fetchWhellLife = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const maxWhell = Number(formData.get("maxWhell"));
        const minWhell = Number(formData.get("minWhell"));
        const n_sharpening = Number(formData.get("n_sharpening"));
        const v_sharpening = Number(formData.get("v_sharpening"));

        if (maxWhell && minWhell && n_sharpening && v_sharpening) {
            const returneddata = await grindWhellLife_API({ maxWhell, minWhell, n_sharpening, v_sharpening });
            console.log(returneddata);
        }
    };

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOnhecked(e.target.checked);
        console.log(e.target.checked);
    }

    return (
        <div>
            <header>
                <h1>enknlnkl</h1>
            </header>
            <main>
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
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default GrindWhellLifeModule