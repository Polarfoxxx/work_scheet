import React from 'react';
import "./style/whellSignal_style.css";
import { signalWhell_API } from '../../../API';

function WhellSignalModule(): React.JSX.Element {
    const [mainResult, setMainResult] = React.useState<number | null>(null);
    const [countTprm_value, setCountTprm_value] = React.useState<number>(0);
    const [sharpenedWheel_value, setSharpenedWheel_value] = React.useState<number>(0);
    const [sharpenedWheel_interval, setSharpenedWheel_interval] = React.useState<number>(0);
    const [supply_interval, setSupply_interval] = React.useState<number>(0);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const payload = {
            valueAllPieces: Number(formData.valueAllPieces),
            countTprm: Number(countTprm_value),                // čítame zo state
            maxWheel_value: Number(formData.maxWheel_value),
            minWheel_value: Number(formData.minWheel_value),
            sharpenedWheel_interval: Number(sharpenedWheel_interval),
            sharpenedWheel_value: Number(sharpenedWheel_value),
            supply_interval: Number(supply_interval),
        };
        if (payload.valueAllPieces > 0 &&
            payload.countTprm > 0 &&
            payload.maxWheel_value > 0 &&
            payload.minWheel_value > 0 &&
            payload.sharpenedWheel_interval > 0 &&
            payload.sharpenedWheel_value > 0 &&
            payload.supply_interval > 0) {
            console.warn("At least one of countTprm, n_sharpening, v_sharpening, or sharpenedWheel_interval must be greater than zero.");
            try {
                const response = await signalWhell_API(payload);
                console.log("API response:", response);
                response?.message ?
                    setMainResult(response.message) :
                    setMainResult(null);
            } catch (err) {
                console.error("Error calling Whell Signal API:", err);
            };
        } else {
            console.warn("All of countTprm, n_sharpening, v_sharpening, and sharpenedWheel_interval are zero. Please provide valid inputs.");
        };
    };


    return (
        <div className="whellSignal_module">
            <header>
                Calculate signal state for grindwhell
            </header>
            <main>
                <div className="whellSignal_form">
                    <form onSubmit={handleSubmit}>
                        {/* *** TPRM BLOK *** */}
                        <div className="tprm_block">
                            <div className="valueAllPieces">
                                <label htmlFor="valueAllPieces">Hromadný budget:</label>
                                <input type="number" id="valueAllPieces" name="valueAllPieces" />
                            </div>
                            <div className="countTprm">
                                <label htmlFor="countTprm">Počet:</label>
                                {/* Range */}
                                <input
                                    id="countTprm"
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={countTprm_value}
                                    onChange={e => setCountTprm_value(Number(e.target.value))} />
                                {/* Number */}
                                <input
                                    id="n_sharpening"
                                    name="n_sharpening"
                                    type="number"
                                    value={countTprm_value}
                                    onChange={e => setCountTprm_value(Number(e.target.value))} />
                            </div>
                        </div>
                        {/* *** WHEEL PARAMETER *** */}
                        <div className="whell_param">
                            <div className="whell_size_param">
                                <div className="maxWheel_value">
                                    <label htmlFor="maxWheel_value">Veľký kotúč:</label>
                                    <input type="number" id="maxWheel_value" name="maxWheel_value" />
                                </div>
                                <div className="minWheel_value">
                                    <label htmlFor="minWheel_value">Malý kotúč:</label>
                                    <input type="number" id="minWheel_value" name="minWheel_value" />
                                </div>
                                <div className='result_whell_size'>
                                    result
                                </div>
                            </div>
                        </div>
                        {/* *** SHARPENING PARAMS *** */}
                        <div className="shaped_whell_param">
                            {/* v_sharpening */}
                            <div className='sharpenedWheel_value'>
                                <label htmlFor="v_sharpening">Veľkosť ostrenia:</label>
                                <input
                                    id="v_sharpening_range"
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={sharpenedWheel_value}
                                    onChange={e => setSharpenedWheel_value(Number(e.target.value))} />
                                <input
                                    id="v_sharpening"
                                    name="v_sharpening"
                                    type="number"
                                    value={sharpenedWheel_value}
                                    onChange={e => setSharpenedWheel_value(Number(e.target.value))} />
                            </div>
                            {/* sharpenedWheel_interval */}
                            <div className='sharpenedWheel_interval'>
                                <label htmlFor="sharpenedWheel_interval">Počet ostrení:</label>
                                <input
                                    id="sharpenedWheel_interval_range"
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={sharpenedWheel_interval}
                                    onChange={e => setSharpenedWheel_interval(Number(e.target.value))} />
                                <input
                                    id="sharpenedWheel_interval"
                                    name="sharpenedWheel_interval"
                                    type="number"
                                    value={sharpenedWheel_interval}
                                    onChange={e => setSharpenedWheel_interval(Number(e.target.value))} />
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className='supply_interval'>
                            <label htmlFor="supply_interval">Doba zaskladnenia:</label>
                            <input
                                id="supply_interval"
                                type="range"
                                min="1"
                                max="10"
                                value={supply_interval}
                                onChange={e => setSupply_interval(Number(e.target.value))} />
                            <input
                                id="supply_interval"
                                name="supply_interval"
                                type="number"
                                value={supply_interval}
                                onChange={e => setSupply_interval(Number(e.target.value))} />
                        </div>
                        <div className='button_content'>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className='response_content'>
                    <div className='response_header'>
                        <h1>
                            frefre
                        </h1>
                    </div>
                    <div className='response_body'>
                        <h1>
                            {mainResult}
                        </h1>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default WhellSignalModule;
