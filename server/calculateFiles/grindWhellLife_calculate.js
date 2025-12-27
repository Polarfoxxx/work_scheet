const express = require("express");
const router = express.Router();

router.get("/whellLife", async (req, res) => {
    const {
         maxWhell, 
         minWhell,
          n_sharpening,
           x_sharpening, 
           cykleTime,
        productionMystake } = req.query;

    try {
        if (maxWhell <= 0 && minWhell <= 0 && n_sharpening <= 0 && x_sharpening <= 0) {
            return res.status(500).json({ message: "zero value" });
        };

        const totalWear = maxWhell - minWhell;
        const wearPerSharpening = Math.round((totalWear / x_sharpening) * 100) / 100;
        const lifePerSharpening = Math.round((wearPerSharpening * n_sharpening) * 100) / 100;

        const lifePerTime = Math.round((lifePerSharpening * cykleTime) * 100) / 100

        return res.status(200).json({
            message: {
                wearPerSharpening: wearPerSharpening, //!počet orovaní
                lifePerSharpening: lifePerSharpening, //!počet dielov
                lifePerTime: lifePerTime || undefined //!čas životnosti podla tkz

            }
        });
    } catch {
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

module.exports = router