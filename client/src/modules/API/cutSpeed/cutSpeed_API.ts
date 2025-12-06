import axios from "axios";


interface type_for_cutSpeed_API_params {
    speedOfRotation: number;
    diametro: number;
}

async function cutSpeed_API(params: type_for_cutSpeed_API_params): Promise<{ message: number } | undefined> {

    try {
        const response = await axios.get(
            "/calculateCutSpeed / cutSpeed",
            {
                params: {
                    rotSpeed: params.speedOfRotation,
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

export default cutSpeed_API;