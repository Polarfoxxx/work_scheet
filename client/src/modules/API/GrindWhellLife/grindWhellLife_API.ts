import axios from "axios";

interface GrindWhellLifeParams {
    maxWhell: number;
    minWhell: number;
    n_sharpening: number;
    v_sharpening: number;
};



async function grindWhellLife_API({ maxWhell, minWhell, n_sharpening, v_sharpening }: GrindWhellLifeParams): Promise<any> {
    

const response = await axios.get(`/grindWhellLife/whellLife&maxWhell=${maxWhell}&minWhell=${minWhell}&n_sharpening=${n_sharpening}&v_sharpening=${v_sharpening}`);
    console.log(response);
    return response.data;
    
};

export default grindWhellLife_API;