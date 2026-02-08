import axios from "axios";


type Type_for_cutSpeed_API_params = {
    speedOfRotation: number;
    diametro: number;
}

async function calculateTkz_API(params: Type_for_cutSpeed_API_params): Promise<{ message: number } | undefined> {

    try {
        const response = await axios.get("/calculateTkz_API/cutSpeed", {
            params: {
                 idm: idm,
        adm: (Number(req.query.adm)),
        breite: (Number(req.query.breite)),
        aufmass: (Number(req.query.aufmass)), /* 0,500 */
        bordmass: (Number(req.query.bordmass)), /* 0,500 */
        autotast_zap: req.query.autotast_zap,
        autotast_dotyk: (Number(req.query.autotast_dotyk)),
        pridavok: (Number(req.query.pridavok)), /* 0,300 */
        rychloposuv: (Number(req.query.rychloposuv)),
        zbk1: (Number(req.query.zbk1)),
        zbk2: (Number(req.query.zbk2)),
        zbk3: (Number(req.query.zbk3)),
        zbk4: (Number(req.query.zbk4)),
        luft: (Number(req.query.luft)),
        v1: (Number(req.query.v1)),
        v2: (Number(req.query.v2)),
        v3: (Number(req.query.v3)),
        sl: (Number(req.query.sl)),
        t: (Number(req.query.t)),
        sr: (Number(req.query.sr)),
            }
        }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        return undefined;
    };
};

export default calculateTkz_API;