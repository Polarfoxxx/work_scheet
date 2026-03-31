import React from "react";
import "../style/merge_style.css"


function Nova_2G(): React.JSX.Element {


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

    };



    return (
        <div className="vehiclegForm">
            <div className="piecesData">
                <div className="formBlockCaculate">
                    <form action="#" onSubmit={e => handleSubmit(e)}>
                        <div className="form Block">
                            <label htmlFor="idm">Vnúroný priemer</label>
                            <input type="number" name="idm" step={0.01} placeholder="mm" />
                        </div>
                        <div className="form Block">
                            <label htmlFor="adm">Vonkajší priemer</label>
                            <input type="number" name="adm" step={0.01} placeholder="mm" />
                        </div>
                        <div className="form Block">
                            <label htmlFor="idm">Výška</label>
                            <input type="number" name="výška" step={0.01} placeholder="mm" />
                        </div>
                        <div className="form Block">
                            <label htmlFor="material">Material</label>
                            <input type="string" name="material" />
                        </div>
                        <div className="form Block">
                            <label htmlFor="pridavok">Prídavok</label>
                            <input type="number" name="pridavok" step={0.001} placeholder="mm" />
                        </div >
                         <div className="form Block">
                            <label htmlFor="tybeGrind">Brusivo</label>
                            <input type="number" name="tybeGrind" step={0.001} placeholder="mm" />
                        </div >
                        <div className="form Block">
                            <button>Prepočet</button>
                        </div>
                    </form>
                    <div className="resultCalculate">
                        <div>
                            resu.t
                        </div>
                        <div>
                            res
                        </div>
                    </div>
                </div>

                {/* ------------------- */}
                {/* ------------------- */}
                <div className="programData Block">
                    <div className="formBlock">
                        <label htmlFor="aufmass">Aufmass</label>
                        <input type="number" name="aufmass" step={0.001} />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="bordmass">Bordmass</label>
                        <input type="number" name="bordmass" step={0.001} />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="zbk1">Zbk1</label>
                        <input type="number" name="zbk1" step={0.001} />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="zbk2">Zbk2</label>
                        <input type="number" name="zbk2" step={0.001} />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="zbk3">Zbk3</label>
                        <input type="number" name="zbk3" step={0.001} />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="zbk4">Zbk4</label>
                        <input type="number" name="zbk4" step={0.001} />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="v1">V1</label>
                        <input type="number" name="v1" step={0.01} />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="v2">V2</label>
                        <input type="number" name="v2" step={0.01} />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="v3">V3</label>
                        <input type="number" name="v3" step={0.01} />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="sl">SL</label>
                        <input type="number" name="sl" step={0.01} />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="t">T</label>
                        <input type="number" name="t" step={0.01} />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="sr">Sr</label>
                        <input type="number" name="sr" step={0.01} />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="autotastHodnota">Autotast hodnota</label>
                        <input type="number" name="autotastHodnota" step={0.01} />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="autotast">Autotast</label>
                        <input type="checkbox" name="autotast" step={0.01} />
                    </div>
                </div>
                <div className="formButtonBlock">
                    <button type="submit">Výpočet</button>
                </div>
            </div>
        </div >
    )
};

export default Nova_2G;