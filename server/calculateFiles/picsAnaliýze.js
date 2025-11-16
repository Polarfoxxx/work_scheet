const express = require("express");
const router = express.Router();
const Jimp = require("jimp");

router.post("/analyze", async (req, res) => {
    const { analyzePics } = req.body;

    try {
        if (!analyzePics) {
            return res.status(400).json({ message: "No image data" });
        }

        // odstránenie base64 prefixu
        const base64Data = analyzePics.replace(/^data:image\/\w+;base64,/, "");
        const buffer = Buffer.from(base64Data, "base64");

        // načítaj obrázok
        const img = await Jimp.read(buffer);

        // grayscale + blur
        img.grayscale().blur(3);

        const width = img.bitmap.width;
        const height = img.bitmap.height;

        let dirtyPixels = 0;
        let totalPixels = width * height;

        // jednoduchý threshold
        const thresholdValue = 128; // môžeš upraviť podľa potreby

        img.scan(0, 0, width, height, function (x, y, idx) {
            const gray = this.bitmap.data[idx]; // grayscale => R = G = B

            if (gray < thresholdValue) {
                dirtyPixels++;
            }
        });

        const percentDirty = (dirtyPixels / totalPixels) * 100;

        return res.json({
            zanesenie: Number(percentDirty.toFixed(2)),
            unit: "%"
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
