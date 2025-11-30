import axios from "axios";


interface type_for_speedOfRotation_API_params {
    cutSpeed: string;
    diametro: string;
}

async function speed_of_rotation_API(params: type_for_speedOfRotation_API_params): Promise<{message: number} | undefined> {
    
    try {
      const response = await axios.get(`/calculatespeedOfRotation/speedOfRotation?cutSpeed=${params.cutSpeed}&dia=${params.diametro}`, {
            withCredentials: true});
        return response.data;
    } catch (error) {
        console.error(error);
    };
};

export default speed_of_rotation_API;