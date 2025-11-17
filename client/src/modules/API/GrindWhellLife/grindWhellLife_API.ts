import axios from "axios";

async function grindWhellLife_API(params:any) {
    

const response = await axios.get(`/grindWhellLife/whellLife`)

};

export default grindWhellLife_API;