import axios from "axios";


type Type_for_speedOfRotation_API_params = {
    cutSpeed: number;
    diametro: number;
};

async function speed_of_rotation_API(params: Type_for_speedOfRotation_API_params): Promise<{ message: number } | undefined> {
    try {
        const response = await axios.get("/calculatespeedOfRotation/speedOfRotation", {
            params: {
                cutSpeed: params.cutSpeed,
                dia: params.diametro
            }
        }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        return undefined;
    };
};

export default speed_of_rotation_API;