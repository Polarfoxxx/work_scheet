import axios from "axios";

type TypeSignalWhell_APIParams = {
    valueAllPieces: number;
    countTprm: number;
    n_sharpening: number;
    v_sharpening: number;
    whellSignalInput: number;
    maxWhell_value: number;
    minWhell_value: number;
};



async function signalWhell_API({
    valueAllPieces,
    countTprm,
    n_sharpening,
    v_sharpening,
    whellSignalInput,
    maxWhell_value,
    minWhell_value
}: TypeSignalWhell_APIParams): Promise<number | undefined> {


    const param1 = `maxWhell=${maxWhell_value}`;
    const param2 = `minWhell=${minWhell_value}`;
    const param3 = `n_sharpening=${n_sharpening}`;
    const param4 = `v_sharpening=${v_sharpening}`;
    const param5 = `valueAllPieces=${valueAllPieces}`;
    const param6 = `countTprm=${countTprm}`;
    const param7 = `whellSignalInput=${whellSignalInput}`;

    const response = await axios.get(`/calculateSignalOfWhell/signalOfWhell? ${param1} & ${param2} & ${param3} & ${param4}`);
    console.log(response);
return response.data;
};

export default signalWhell_API;