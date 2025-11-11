const express = require("express");
const router = express.Router();

router.get("/cykleCalk", async (req, res) => {
    const { calTime, couPiec } = req.query;

    try {
        if (calTime <= 0 || couPiec <= 0) {
            return res.status(500).json({ message: "zero value" });
        };
        const calculateOne = calTime / couPiec;
        const calculateTwo = calculateOne / 60;
        const roundedReturn = Math.round(calculateTwo * 1000) / 1000;

        const roundedReturn_halfHour = (Math.round(calculateTwo * 1000) / 1000) / 2;
        return res.status(200).json({
            message: {
                fullCykle: roundedReturn,
                halfHourCykle: roundedReturn_halfHour
            }
        });





    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    };
});

module.exports = router;