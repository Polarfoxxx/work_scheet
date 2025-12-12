import React from "react";
import "./style/education_style.css";


function EducationModule(): React.JSX.Element {


    return (
        <div className="educationModule">
            <header>
                <h1>Education</h1>
            </header>
            <main>
                <div className="education_text">
                    <div className="content_text one">
                        <div className="blockHeader"><h5>1. Korundové zrná (Al₂O₃ oxid hlinitý)</h5></div>
                        <div className="blockText"><p>Najpoužívanejšie zrná na brúsenie kovov.</p></div>
                        <div className="blockListHead"><p>Podtypy:</p></div>
                        <div className="blocklistBody">
                            <ul>
                                <li>
                                    <div><h5>Normálny korund (A)</h5></div>
                                    <div><p>hnedý, tvrdý, húževnatý, na nehrdzavejúcu oceľ, konštrukčné ocele, liatinu.</p></div>
                                </li>
                                <li>
                                    <div><h5>Poloušľachtilý korund (PA)</h5></div>
                                    <div><p>ružový, o niečo tvrdší a ostrejší, na jemnejšie brúsenie.</p></div>
                                </li>
                                <li>
                                    <div><h5>Ušľachtilý / biely korund (WA)</h5></div>
                                    <div><p>veľmi tvrdý a ostrý, používa sa na kalené ocele a ostré hrany.</p></div>
                                </li>
                                <li>
                                    <div><h5>Keramický korund (SG, microcrystalline alumina)</h5></div>
                                    <div><p>veľmi tvrdý, samoostriaci, pre vysoko výkonné brúsenie.</p></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content_text two">
                        <div className="blockHeader"><h5>2. Karbid kremíka (SiC)</h5></div>
                        <div className="blockText"><p>Ostriace, veľmi tvrdé čierne alebo zelené zrná.</p></div>
                        <div className="blockListHead"><p>Použitie:</p></div>
                        <div className="blocklistBody"><p>krehké materiály: sklo, keramika, karbidové nástroje, neželezné kovy: hliník, meď, tvrdené povrchy, liatina</p></div>
                    </div>
                    <div className="content_text third">
                        <div className="blockHeader"><h5>3. Kubický nitrid bóru (CBN)</h5></div>
                        <div className="blockText"><p>Veľmi tvrdý syntetický materiál, druhý najtvrdší po diamante.</p></div>
                        <div className="blockListHead"><p>Použitie:</p></div>
                        <div className="blocklistBody"><p>kalené ocele, rýchlorezné ocele (HSS), špeciálne nástrojové ocelevysoké teploty a zaťaženia</p></div>
                    </div>
                    <div className="content_text fouth">
                        <div className="blockHeader"><h5>4. Priemyselný diamant</h5></div>
                        <div className="blockText"><p>Najtvrdšie zrno, ale nevhodné na železné kovy (karbidizácia pri vysokých teplotách).</p></div>
                        <div className="blockListHead"><p>Použitie:</p></div>
                        <div className="blocklistBody"><p>karbidy (HM), keramika, sklo, grafit, kompozity presné jemné brúsenie</p></div>
                    </div>
                    <div className="content_text fifth">
                        <div className="blockHeader"><h5>5. Keramické a špeciálne hybridné zrná</h5></div>
                        <div className="blockText"><p>Používajú sa v moderných vysokovýkonných kotúčoch.</p></div>
                        <div className="blockListHead"><p>Príklady:</p></div>
                        <div className="blocklistBody">
                            <ul>
                                <li>
                                    <div><h5>Keramické mikro-zrná (microcrystalline alumina)</h5></div>
                                </li>
                                <li>
                                    <div><h5>Zliatinové a zhlukové zrná (clustered grains)</h5></div>
                                </li>
                                <li>
                                    <div><h5>Zrno so samoostriacou schopnosťou</h5></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="education_table">
                    <table>
                        <caption>Skratky, ktoré sa bežne používajú na označenie zŕn</caption>
                        <thead>
                            <tr>
                                <th>Skratka</th>
                                <th>Materiál</th>
                                <th>Popis</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A</td>
                                <td>korund</td>
                                <td>bežné brúsenie ocele</td>
                            </tr>
                            <tr>
                                <td>PA / RA</td>
                                <td>ružový korund</td>
                                <td>kvalitnejšie brúsenie, tvrdšie ocele</td>
                            </tr>
                            <tr>
                                <td>WA</td>
                                <td>biely korund</td>
                                <td>kalené ocele</td>
                            </tr>
                            <tr>
                                <td>SA / SG</td>
                                <td>keramický korund</td>
                                <td>vysoký výkon</td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>karbid kremíka</td>
                                <td>krehké materiály, neželezné kovy</td>
                            </tr>
                            <tr>
                                <td>GC</td>
                                <td>zelený karbid kremíka</td>
                                <td>tvrdé krehké materiály (karbidy)</td>
                            </tr>
                            <tr>
                                <td>CBN / BN</td>
                                <td>kubický nitrid bóru</td>
                                <td>kalené ocele</td>
                            </tr>
                            <tr>
                                <td>D</td>
                                <td>diamant</td>
                                <td>veľmi tvrdé materiály</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
};

export default EducationModule