import React from 'react';
import "./style/whellSignal_style.css";
import {signalWhell_API} from '../../../API';


function WhellSignalModule(): React.JSX.Element {



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
                            <div>
                                <div className=""> {/* pre počet dielov */}
                                    <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                    <input type="number" id="valueAllPieces" name="valueAllPieces" />
                                </div>
                                <div>
                                    <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                    <input type="number" id="valueAllPieces" name="valueAllPieces" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                    <input type="number" id="valueAllPieces" name="valueAllPieces" />
                                </div>
                                <div>
                                    <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                    <input type="number" id="valueAllPieces" name="valueAllPieces" />
                                </div>
                            </div>
                        </div>
                        {/* -------------------- */}
                        <div className="whell_param">
                            <div className=""> {/* pre počet dielov */}
                                <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                <input type="number" id="valueAllPieces" name="valueAllPieces" />
                            </div>
                            <div>
                                <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                <input type="number" id="valueAllPieces" name="valueAllPieces" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                <input type="number" id="valueAllPieces" name="valueAllPieces" />
                            </div>
                            <div>
                                <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                <input type="number" id="valueAllPieces" name="valueAllPieces" />
                            </div>
                        </div>
                        {/* -------------------- */}
                         <div className="whell_param">
                            <div className=""> {/* pre počet dielov */}
                                <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                <input type="number" id="valueAllPieces" name="valueAllPieces" />
                            </div>
                            <div>
                                <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                <input type="number" id="valueAllPieces" name="valueAllPieces" />
                            </div>
                        </div>
                        <div className="shaped_whell_param">
                            <div>
                                <label htmlFor="valueAllPieces">Whell Signal Input:</label>
                                <input type="number" id="valueAllPieces" name="valueAllPieces" />
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