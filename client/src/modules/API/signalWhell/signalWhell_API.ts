import axios from "axios";

interface signalWhell_APIParams {
    maxWhell: number;
    minWhell: number;
    n_sharpening: number;
    v_sharpening: number;
};



async function signalWhell_API({ maxWhell, minWhell, n_sharpening, v_sharpening }: signalWhell_APIParams): Promise<any> {
    

const param1 = `maxWhell=${maxWhell}`;
const param2 = `minWhell=${minWhell}`;
const param3 = `n_sharpening=${n_sharpening}`;
const param4 = `v_sharpening=${v_sharpening}`;

const response = await axios.get(`/calculateSignalOfWhell/signalOfWhell? ${param1} & ${param2} & ${param3} & ${param4}`);
    console.log(response);
    
};

export default signalWhell_API;