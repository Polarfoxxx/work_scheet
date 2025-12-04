import React from 'react';
import "./style/whellSignal_style.css";
import { signalWhell_API } from '../../../API';


function WhellSignalModule(): React.JSX.Element {
    const [countTprm_value, setCountTprm_value] = React.useState<number>(0);
    const [sharpedWhell_value, setSharpedWhell_value] = React.useState<number>(0);


    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const whellSignalInput = formData.get('valueAllPieces');
        console.log('Whell Signal Input:', whellSignalInput);
        // Add further processing logic here
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
                            <div className='sharpedWhell'>
                                <label htmlFor="sharpedWhell">Počet:</label>
                                <input
                                    id="sharpedWhell"
                                    type="range"
                                    min="1" max="10"
                                    value={sharpedWhell_value}
                                    onChange={e => { setSharpedWhell_value(Number(e.target.value)) }} />
                                <input
                                    id="sharpedWhell"
                                    name="sharpedWhell"
                                    type="number"
                                    step="1"
                                    value={sharpedWhell_value}
                                    onChange={e => { setSharpedWhell_value(Number(e.target.value)) }} />
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