import React, { useState } from "react";
import { picsAnalyze_API } from "../../../API";

function PicsAnalyzeModule() {
    const [preview, setPreview] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0];
            setFile(img);
            setPreview(URL.createObjectURL(img));
        }
    };

    const uploadImage = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        const returnedData = picsAnalyze_API(formData)
        console.log(returnedData);
    };

    return (
        <div>
            <label htmlFor="imgUpload">img upload</label>
            <input id="imgUpload" type="file" accept="image/*" onChange={handleFileChange} />

            {preview && <img src={preview} alt="preview" width={300} />}

            <button onClick={uploadImage}>Upload & Analyze</button>
        </div>
    );
}

export default PicsAnalyzeModule;