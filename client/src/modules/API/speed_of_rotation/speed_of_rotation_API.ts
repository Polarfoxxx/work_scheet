import axios from "axios";


interface type_for_speed_of_rotation_params {
    cutSpeed: string;
    diametro: string;
}

async function speed_of_rotation_API(speed_of_rotation: type_for_speed_of_rotation_params): Promise<{message: number} | undefined> {
    
    try {
      const response = await axios.get(`/calculatespeedOfRotation/speedOfRotation?cutSpeed=${speed_of_rotation.cutSpeed}&dia=${speed_of_rotation.diametro}`, {
            withCredentials: true});
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default speed_of_rotation_API;