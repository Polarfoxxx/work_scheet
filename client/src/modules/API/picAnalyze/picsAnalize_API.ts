

async function PicsAnalyze_API(formData: FormData): Promise<any> {

  const res = await fetch("http://localhost:5000/upload", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

}

export default PicsAnalyze_API;