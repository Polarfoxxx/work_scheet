import axios from "axios";


type Type_for_calculateTz_params = {
    idm: number;
    adm: number;
    breite: number,
    aufmass: number,
    bordmass: number,
    autotast_zap: number,
    autotast_dotyk: number,
    pridavok: number,
    rychloposuv: number,
    zbk1: number,
    zbk2: number,
    zbk3: number,
    zbk4: number,
    luft: number,
    v1: number,
    v2: number,
    v3: number,
    sl: number,
    t: number,
    sr: number,
}

async function calculateTkz_API(params: Type_for_calculateTz_params): Promise<{ message: number } | undefined> {

    try {
        const response = await axios.get("/calculateCalcTkz/calculateTz", {
            params: {
                idm: params.idm,
                adm: params.adm,
                breite: params.breite,
                aufmass: params.aufmass,
                bordmass: params.bordmass,
                autotast_zap: params.autotast_zap,
                autotast_dotyk: params.autotast_dotyk,
                pridavok: params.pridavok,
                rychloposuv: params.rychloposuv,
                zbk1: params.zbk1,
                zbk2: params.zbk2,
                zbk3: params.zbk3,
                zbk4: params.zbk4,
                luft: params.luft,
                v1: params.v1,
                v2: params.v2,
                v3: params.v3,
                sl: params.sl,
                t: params.t,
                sr: params.sr,
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
        return undefined;
    };
};

export default calculateTkz_API;