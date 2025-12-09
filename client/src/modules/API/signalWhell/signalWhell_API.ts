import axios from "axios";

export type TypeSignalWhell_APIParams = {
    valueAllPieces: number,
    countTprm: number,
    maxWheel_value: number,
    minWheel_value: number,
    sharpenedWheel_interval: number,
    sharpenedWheel_value: number,
    supply_interval: number
};

async function signalWhell_API(params: TypeSignalWhell_APIParams): Promise<{ message: number } | undefined> {
    console.log(params)
    try {
        const response = await axios.get("/calculateSignalOfWhell/signalOfWhell", {
            params: {
                valueAllPieces: params.valueAllPieces,
                countTprm: params.countTprm,
                maxWheel_value: params.maxWheel_value,
                minWheel_value: params.minWheel_value,
                sharpenedWheel_interval: params.sharpenedWheel_interval,
                sharpenedWheel_value: params.sharpenedWheel_value,
                supply_interval: params.supply_interval

            }
        });
        return response.data;
    } catch (error) {
        console.error("API Error (signalWhell_API):", error);
        return undefined;
    };
};

export default signalWhell_API;
