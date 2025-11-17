import axios from "axios";

async function picsAnalyze_API(formData: any): Promise<any> {

   const response = await axios.post("/picsAnalyze/analyze", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });

    console.log(response);


}

export default picsAnalyze_API;