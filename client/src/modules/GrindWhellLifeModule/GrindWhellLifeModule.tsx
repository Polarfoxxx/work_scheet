import React from "react"
import { grindWhellLife_API } from "../API"

function GrindWhellLifeModule(): React.JSX.Element {


    const fetchWhellLife = async (e: React.FormEvent<HTMLFormElement>) => {

        const formData = new FormData(e.currentTarget);
        const maxWhell = Number(formData.get("maxWhell"));
        const minWhell = Number(formData.get("minWhell"));
        const n_sharpening = Number(formData.get("n_sharpening"));
        const v_sharpening = Number(formData.get("v_sharpening"));

        if (maxWhell && minWhell && n_sharpening && v_sharpening) {
            const returneddata = await grindWhellLife_API({ maxWhell, minWhell, n_sharpening, v_sharpening });
            console.log(returneddata);
        }
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
                            <label htmlFor="mixWhell">mixWhell</label>
                            <input id="mixWhell" name="mixWhell" type="number" />
                        </div>
                        <div>
                            <label htmlFor="n_sharpening">n_sharpening</label>
                            <input id="n_sharpening" name="n_sharpening" type="number" />
                        </div>
                        <div>
                            <label htmlFor="v_sharpening">v_sharpening</label>
                            <input id="v_sharpening" name="v_sharpening" type="number" />
                        </div>
                        <button type="submit">Get grind whell life</button>
                    </form>
                </div>
                <div>

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