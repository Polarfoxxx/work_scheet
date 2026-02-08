import React from "react";
import { calculateTkz_API } from "../../../API";


function CalculateTkz_Module(): React.JSX.Element {


    const handleSubmit_calculateTZ = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const payload = {

        };
    };

    return (
        <div className="calculateTkz">
            <div className="calculate block">
                <div>
                    <form action="#" onSubmit={e => handleSubmit_calculateTZ(e)}>
                        <div className="formCalculate">
                            <div className="formBlock one">
                                <label htmlFor="vehicleType">Machine type</label>
                                <input name="vehicleType" type="number" />
                            </div>
                            <div className="piciesInfoVlock">
                                <div className="formBlock one">
                                    <label htmlFor="idm">IDM</label>
                                    <input name="idm" type="number" />
                                </div>
                                <div className="formBlock one">
                                    <label htmlFor="adm">ADM</label>
                                    <input name="adm" type="number" />
                                </div>
                                <div className="formBlock one">
                                    <label htmlFor="breite">BREITE</label>
                                    <input name="breite" type="number" />
                                </div>
                            </div>
                            <div className="formBlock one">
                                <label htmlFor=""></label>
                                <input type="number" />
                            </div>
                        </div>
                        <div className="formCalculate">
                            <div className="formBlock one">
                                <label htmlFor=""></label>
                                <input type="number" />
                            </div>
                            <div className="formBlock one">
                                <label htmlFor=""></label>
                                <input type="number" />
                            </div>
                        </div>
                        <div className="formCalculate">
                            <button type="submit">Calculate</button>
                        </div>
                    </form>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
};


export default CalculateTkz_Module;