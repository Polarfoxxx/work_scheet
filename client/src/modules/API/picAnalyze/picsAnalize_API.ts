import axios from "axios";

async function PicsAnalyze_API(analyzePics: any): Promise<any> {

  const response = await axios("/picsAnalyze/analyze", {
            method: "POST",
            params: analyzePics,
        });

        const data = response.data;
        console.log(data);
        

}

export default PicsAnalyze_API;