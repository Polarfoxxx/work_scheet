import React from 'react';
import "./style/whellSignal_style.css";
import { signalWhell_API } from '../../../API';


function WhellSignalModule(): React.JSX.Element {
    const [countTprm_value, setCountTprm_value] = React.useState<number>(0);
    const [sharpedWhell_value, setSharpedWhell_value] = React.useState<number>(0);
    const [sharpedWhell_interval, setSharpedWhell_interval] = React.useState<number>(0);


    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const valueAllPieces = formData.get('valueAllPieces');
        const countTprm = formData.get('countTprm');
        const n_sharpening = formData.get('n_sharpening');
        const v_sharpening = formData.get('sharpedWhell_value');
        const whellSignalInput = formData.get('valueAllPieces');
        const maxWhell_value = formData.get('maxWhell_value');
        const minWhell_value = formData.get('minWhell_value');

        if(valueAllPieces && countTprm && n_sharpening && v_sharpening && whellSignalInput && maxWhell_value && minWhell_value) {
            signalWhell_API({
                valueAllPieces: Number(valueAllPieces),
                countTprm: Number(countTprm),
                n_sharpening:  Number(n_sharpening),
                v_sharpening: Number(v_sharpening),
                whellSignalInput: Number(whellSignalInput),
                maxWhell_value: Number(maxWhell_value),
                minWhell_value: Number(minWhell_value)
            });
        }

    };


    return (
        <div className="whellSignal_module">
            <header>
                WhellSignalModule
            </header>
            <main>
                <div className="whellSignal_form">
                    <form action="#" onSubmit={e => handlesubmit(e)}>
                        <div className="tprm_block">
                            <div className="valueAllPieces"> {/* pre počet dielov */}
                                <label htmlFor="valueAllPieces">Hromadný budget:</label>
                                <input type="number" id="valueAllPieces" name="valueAllPieces" />
                            </div>
                            <div className="countTprm"> {/* pre tprm */}
                                <label htmlFor="countTprm">Počet:</label>
                                <input
                                    id="countTprm"
                                    type="range"
                                    min="1" max="10"
                                    value={countTprm_value}
                                    onChange={e => { setCountTprm_value(Number(e.target.value)) }} />
                                <input
                                    id="n_sharpening"
                                    name="n_sharpening"
                                    type="number"
                                    step="1"
                                    value={countTprm_value}
                                    onChange={e => { setCountTprm_value(Number(e.target.value)) }} />
                            </div>
                            {/*  <div>
                                    <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                    <input type="number" id="valueAllPieces" name="valueAllPieces" />
                                </div>
                                <div>
                                    <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                    <input type="number" id="valueAllPieces" name="valueAllPieces" />
                                </div> */}
                        </div>
                        {/* -------------------- */}
                        <div className="whell_param">
                            <div className="whell_size_param">
                                <div className="maxWhell_value"> {/* maximalna velkost kotúca*/}
                                    <label htmlFor="maxWhell_value">Veľký kotúč</label>
                                    <input type="number" id="maxWhell_value" name="maxWhell_value" />
                                </div>
                                <div className='minWhell_value'> {/* minimalna velkost kotúca*/}
                                    <label htmlFor="minWhell_value">Malý kotúč:</label>
                                    <input type="number" id="minWhell_value" name="minWhell_value" />
                                </div>
                                <div className='result_whell_size'> {/* vysledok velkosti kotúca*/}
                                    <div>
                                        result
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  <div>
                            <div>
                                <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                <input type="number" id="valueAllPieces" name="valueAllPieces" />
                            </div>
                            <div>
                                <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                <input type="number" id="valueAllPieces" name="valueAllPieces" />
                            </div>
                        </div> */}
                        {/* -------------------- */}
                        <div className="shaped_whell_param">
                            <div className='sharpedWhell_value'> {/*velkost ostrenia */}
                                <label htmlFor="sharpedWhell_value">Počet:</label>
                                <input
                                    id="sharpedWhell_value"
                                    type="range"
                                    min="1" max="10"
                                    value={sharpedWhell_value}
                                    onChange={e => { setSharpedWhell_value(Number(e.target.value)) }} />
                                <input
                                    id="sharpedWhell_value"
                                    name="sharpedWhell_value"
                                    type="number"
                                    step="1"
                                    value={sharpedWhell_value}
                                    onChange={e => { setSharpedWhell_value(Number(e.target.value)) }} />
                            </div>
                            <div className='sharpedWhell_interval'> {/* pre pocet ostreni kotúca */}
                                <label htmlFor="sharpedWhell_interval">Počet:</label>
                                <input
                                    id="sharpedWhell_interval"
                                    type="range"
                                    min="1" max="10"
                                    value={sharpedWhell_interval}
                                    onChange={e => { setSharpedWhell_interval(Number(e.target.value)) }} />
                                <input
                                    id="sharpedWhell_interval"
                                    name="sharpedWhell_interval"
                                    type="number"
                                    step="1"
                                    value={sharpedWhell_interval}
                                    onChange={e => { setSharpedWhell_interval(Number(e.target.value)) }} />
                            </div>
                            <div>
                                <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                <input type="number" id="valueAllPieces" name="valueAllPieces" />
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div>

                </div>
            </main>
            <footer>

            </footer>
        </div>
    );
}
export default WhellSignalModule;