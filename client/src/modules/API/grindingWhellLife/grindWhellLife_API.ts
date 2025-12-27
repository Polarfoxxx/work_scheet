import axios from "axios";

type Type_grindWhellLifeParams = {
    maxWhell: number;
    minWhell: number;
    n_sharpening: number;
    x_sharpening: number;
    cykleTime: number | undefined;
    productionMystake: number;
    duoGrinding: boolean
};

export type Type_forReturned_API = {
    status: number,
    data: {
        message: {
            wearPerSharpening: number,
            lifePerSharpening: number,
            lifePerTime: number | undefined
        };
    };
};


async function grindWhellLife_API(params: Type_grindWhellLifeParams): Promise<Type_forReturned_API | undefined> {
    console.log(params);
    
    try {
        const response = await axios.get("/calculateGrindWhellLife/whellLife", {
            params: {
                maxWhell: params.maxWhell,
                minWhell: params.minWhell,
                n_sharpening: params.n_sharpening,
                x_sharpening: params.x_sharpening,
                cykleTime: params.cykleTime,
                productionMystake: params.productionMystake
            }
        });
        return response;
    } catch (error) {
        console.error("API Error (grindWhellLife_API):", error);
        return undefined;
    };
};

export default grindWhellLife_API;