const express = require("express");
const router = express.Router();

router.get("/cutSpeed", async (req, res) => {
    const { speed, dia } = req.query;

    try {
        if (dia <= 0 || speed <= 0) {
            return res.status(500).json({ message: "zero value" });
        };

        const calculateOne = speed * 60;
        const calculateTwo = (dia / 1000) * Math.PI;
        const calculateSpeed = calculateOne / calculateTwo;
        const roundedSpeed = Math.round(calculateSpeed);
        return res.status(200).json({ message: roundedSpeed });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    };
});

module.exports = router;