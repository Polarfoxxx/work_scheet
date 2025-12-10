import React from "react";
import "./style/education_style.css";


function EducationModule(): React.JSX.Element {


    return (
        <div className="educationModule">
            <header>
                <h1>Education</h1>
            </header>
            <main>
                <span>
                    🔹 1. Korundové zrná (Al₂O₃ oxid hlinitý)
                    Najpoužívanejšie zrná na brúsenie kovov.
                    Podtypy:
                    Normálny korund (A)
                    – hnedý, tvrdý, húževnatý, na nehrdzavejúcu oceľ, konštrukčné ocele, liatinu.
                    Poloušľachtilý korund (PA)
                    – ružový, o niečo tvrdší a ostrejší, na jemnejšie brúsenie.
                    Ušľachtilý / biely korund (WA)
                    – veľmi tvrdý a ostrý, používa sa na kalené ocele a ostré hrany.
                    Keramický korund (SG, microcrystalline alumina)
                    – veľmi tvrdý, samoostriaci, pre vysoko výkonné brúsenie.
                </span>
                <span>
                    🔹 2. Karbid kremíka (SiC)
                    Ostriace, veľmi tvrdé čierne alebo zelené zrná.
                    Použitie:
                    krehké materiály: sklo, keramika, karbidové nástroje
                    neželezné kovy: hliník, meď
                    tvrdené povrchy, liatina
                </span>
                <span>
                    🔹 3. Kubický nitrid bóru (CBN)
                    Veľmi tvrdý syntetický materiál, druhý najtvrdší po diamante.
                    Použitie:
                    kalené ocele, rýchlorezné ocele (HSS), špeciálne nástrojové ocele
                    vysoké teploty a zaťaženia
                </span>
                <span>
                    🔹 4. Priemyselný diamant
                    Najtvrdšie zrno, ale nevhodné na železné kovy (karbidizácia pri vysokých teplotách).
                    Použitie:
                    karbidy (HM), keramika
                    sklo, grafit, kompozity
                    presné jemné brúsenie
                </span>
                <span>
                    🔹 5. Keramické a špeciálne hybridné zrná
                    Používajú sa v moderných vysokovýkonných kotúčoch.
                    Príklady:
                    Keramické mikro-zrná (microcrystalline alumina)
                    Zliatinové a zhlukové zrná (clustered grains)
                    Zrno so samoostriacou schopnosťou
                </span>
            </main>
            <div>
            </div>
        </div>
    )
};

export default EducationModule