import axios from "axios";
const API_URL = process.env.REACT_APP_CURRENT_API_URL;


interface type_for_cutSpeed_params {
    cutSpeed: string;
    diametro: string;
}

async function cutSpeed_API(cutSpeed_params: type_for_cutSpeed_params): Promise<{message: number} | undefined> {
    
    try {
      const response = await axios.get(`/calculateCutSpeed/cutSpeed?speed=${cutSpeed_params.cutSpeed}&dia=${cutSpeed_params.diametro}`, {
            withCredentials: true});
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default cutSpeed_API;