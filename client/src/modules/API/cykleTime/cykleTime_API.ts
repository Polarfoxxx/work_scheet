import axios from "axios";


interface type_for_cykleTime_params {
    calTime: string;
    couPiec: string;
};

export interface type_for_cykleTime_response {
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

async function cykleTime_API(cykleData: type_for_cykleTime_params): Promise<type_for_cykleTime_response | undefined> {

    try {
        const response = await axios.get(`/cykleTime/cykleCalk?calTime=${cykleData.calTime}&couPiec=${cykleData.couPiec}`, {
            withCredentials: true
        });
        return response.data.message
            ;
    } catch (error) {
        console.error(error);
    }
}

export default cykleTime_API;