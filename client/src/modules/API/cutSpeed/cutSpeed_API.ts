import axios from "axios";


interface type_for_cutSpeed_API_params {
    speedOfRotation: string;
    diametro: string;
}

async function cutSpeed_API(params: type_for_cutSpeed_API_params): Promise<{message: number} | undefined> {
    
    try {
      const response = await axios.get(`/calculateCutSpeed/cutSpeed?rotSpeed=${params.speedOfRotation}&dia=${params.diametro}`, {
            withCredentials: true});
        return response.data;
    } catch (error) {
        console.error(error);
    };
};

export default cutSpeed_API;