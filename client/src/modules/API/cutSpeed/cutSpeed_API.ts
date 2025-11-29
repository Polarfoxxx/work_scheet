import axios from "axios";


interface type_for_cutSpeed_params {
    speedOfRotation: string;
    diametro: string;
}

async function cutSpeed_API(cutSpeed_params: type_for_cutSpeed_params): Promise<{message: number} | undefined> {
    
    try {
      const response = await axios.get(`/calculateCutSpeed/cutSpeed?speed=${cutSpeed_params.speedOfRotation}&dia=${cutSpeed_params.diametro}`, {
            withCredentials: true});
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default cutSpeed_API;