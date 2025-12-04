import axios from "axios";

interface signalWhell_APIParams {
    maxWhell: number;
    minWhell: number;
    n_sharpening: number;
    v_sharpening: number;
};



async function signalWhell_API({ maxWhell, minWhell, n_sharpening, v_sharpening }: signalWhell_APIParams): Promise<any> {
    

const response = await axios.get(`/grindWhellLife/whellLife?maxWhell=${maxWhell}&minWhell=${minWhell}&n_sharpening=${n_sharpening}&v_sharpening=${v_sharpening}`);
    console.log(response);
    
};

export default signalWhell_API;