import axios from "axios";

export type TypeSignalWhell_APIParams = {
    valueAllPieces: number;
    countTprm: number;
    n_sharpening: number;
    v_sharpening: number;
    wheelSignalInput: number;
    maxWheel_value: number;
    minWheel_value: number;
    sharpenedWheel_interval?: number;
};

async function signalWhell_API(params: TypeSignalWhell_APIParams): Promise<number | undefined> {
    try {
        const response = await axios.get(
            "/calculateSignalOfWhell/signalOfWhell",
            {
                params: {
                    maxWheel: params.maxWheel_value,
                    minWheel: params.minWheel_value,
                    n_sharpening: params.n_sharpening,
                    v_sharpening: params.v_sharpening,
                    valueAllPieces: params.valueAllPieces,
                    countTprm: params.countTprm,
                    wheelSignalInput: params.wheelSignalInput,
                    sharpenedWheel_interval: params.sharpenedWheel_interval ?? 0
                }
            }
        );

        return response.data;

    } catch (error) {
        console.error("API Error (signalWhell_API):", error);
        return undefined;
    }
}

export default signalWhell_API;
