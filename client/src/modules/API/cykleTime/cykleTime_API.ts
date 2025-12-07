import axios from "axios";


type Type_for_cykleTime_params = {
    calTime: number;
    couPiec: number;
};

export type Type_for_cykleTime_response = {
    thisCykle: number,
    halfHourCykle: number,
    onehourCykle: number,
    twoohourCykle: number,
    threehourCykle: number,
    fourhourCykle: number,
    fivehourCykle: number,
    sixHourCykle: number,
    sevenHourCykle: number,
    eightHourCykle: number,
};

async function cykleTime_API(params: Type_for_cykleTime_params): Promise<{ message: Type_for_cykleTime_response } | undefined> {
    try {
        const response = await axios.get("/cykleTime/cykleCalk", {
            params: {
                calTime: params.calTime,
                couPiec: params.couPiec,
            }
        });
        return response.data
    } catch (error) {
        console.error(error);
        return undefined;
    };
};

export default cykleTime_API;