import React from "react";




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
                                <label htmlFor=""></label>
                                <input name="vehicleType" type="number" />
                            </div>
                            <div className="piciesInfoVlock">
                                <div className="formBlock one">
                                    <label htmlFor="IDM">IDM</label>
                                    <input name="IDM" type="number" />
                                </div>
                                <div className="formBlock one">
                                    <label htmlFor="ADM">ADM</label>
                                    <input name="ADM" type="number" />
                                </div>
                                <div className="formBlock one">
                                    <label htmlFor="BREITE">BREITE</label>
                                    <input name="BREITE" type="number" />
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