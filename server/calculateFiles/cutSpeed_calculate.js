const express = require("express");
const router = express.Router();

router.get("/cutSpeed", async (req, res) => {
    const { rotSpeed, dia } = req.query;

    try {
        if (dia <= 0 || rotSpeed <= 0) {
            return res.status(500).json({ message: "zero value" });
        };

        const calculateOne = dia * Math.PI * rotSpeed
        const calculateCutSpeed = calculateOne / 60000;
        const roundedCutSpeed = Math.round(calculateCutSpeed * 100) / 100;
        return res.status(200).json({ message: roundedCutSpeed });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    };
});

module.exports = router;