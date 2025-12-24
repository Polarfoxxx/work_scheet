const express = require("express");
const router = express.Router();

router.get("/whellLife", async (req, res) => {
    const { maxWhell, minWhell, n_sharpening, x_sharpening } = req.query;

    try {
        if (maxWhell <= 0 || minWhell <= 0 || n_sharpening <= 0 || x_sharpening <= 0) {
            return res.status(500).json({ message: "zero value" });
        };
        const totalWear = maxWhell - minWhell;
        const wearPerSharpening = totalWear / x_sharpening;
        const lifePerSharpening = wearPerSharpening * n_sharpening;
        return res.status(200).json({
            message: {
                wearPerSharpening: Math.round(wearPerSharpening * 100) / 100, //!počet orovaní
                lifePerSharpening: Math.round(lifePerSharpening * 100) / 100, //!počet dielov
            }
        });
    } catch {
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

module.exports = router