import axios from "axios";


interface type_for_cykleTime_params {
    calTime: string;
    couPiec: string;
}

async function cykleTime_API(cykleData: type_for_cykleTime_params): Promise<any | undefined> {
    
    try {
      const response = await axios.get(`/cykleTime/cykleCalk?calTime=${cykleData.calTime}&couPiec=${cykleData.couPiec}`, {
            withCredentials: true});
        console.log(response);
        return 5
        ;
    } catch (error) {
        console.error(error);
    }
}

export default cykleTime_API;