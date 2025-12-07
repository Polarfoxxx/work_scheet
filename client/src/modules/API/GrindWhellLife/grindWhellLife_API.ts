import axios from "axios";

type Type_grindWhellLifeParams = {
    maxWhell: number;
    minWhell: number;
    n_sharpening: number;
    v_sharpening: number;
};

async function grindWhellLife_API(params: Type_grindWhellLifeParams): Promise<{ message: number } | undefined> {
    try {
        const response = await axios.get("/grindWhellLife/whellLife", {
            params: {
                maxWhell: params.maxWhell,
                minWhell: params.minWhell,
                n_sharpening: params.n_sharpening,
                v_sharpening: params.v_sharpening,
            }
        }
        );
        return response.data;
    } catch (error) {
        console.error("API Error (grindWhellLife_API):", error);
        return undefined;
    };
};

export default grindWhellLife_API;