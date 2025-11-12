const express = require("express");
const router = express.Router();

router.get("/cykleCalk", async (req, res) => {
    const { calTime, couPiec } = req.query;

    try {
        if (calTime <= 0 || couPiec <= 0) {
            return res.status(500).json({ message: "zero value" });
        };
        const calculateFirstTime = calTime / couPiec;
        const calculateOnePiece = 1 / calculateFirstTime;  //! diel za sekundu
        const roundedReturnOnePiece = Math.round(calculateOnePiece * 100) / 100; 
        const pieceForMminute = roundedReturnOnePiece * 60; //! dielov za minutu

        return res.status(200).json({
            message: {
                thisCykle:  calculateFirstTime / 60,
                halfHourCykle: pieceForMminute * 30,
                onehourCykle: pieceForMminute * 60,
                twoohourCykle: pieceForMminute * 120,
                threehourCykle: pieceForMminute * 180,
                fourhourCykle: pieceForMminute * 240,
                fivehourCykle: pieceForMminute * 300,
                sixHourCykle: pieceForMminute * 360,
                sevenHourCykle: pieceForMminute * 420,
                eightHourCykle: pieceForMminute * 480,
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    };
});

module.exports = router;