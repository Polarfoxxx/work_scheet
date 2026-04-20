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
            message: [
                { nameCykle: "Aktualný cyklový čas", value: calculateFirstTime / 60, },
                { nameCykle: "30 minút", value: pieceForMminute * 30 },
                { nameCykle: "1 hodinu", value: pieceForMminute * 60 },
                { nameCykle: "2 hodiny", value: pieceForMminute * 120 },
                { nameCykle: "3 hodiny", value: pieceForMminute * 180 },
                { nameCykle: "4 hodiny", value: pieceForMminute * 240 },
                { nameCykle: "hodin", value: pieceForMminute * 300 },
                { nameCykle: "6 hodin", value: pieceForMminute * 360 },
                { nameCykle: "7 hodin", value: pieceForMminute * 420 },
                { nameCykle: "8 hodin / zmena", value: pieceForMminute * 450 },
                { nameCykle: "dve zmeny", value: pieceForMminute * 900 },
                { nameCykle: "tri zmeny/deň", value: pieceForMminute * 1350 },
                { nameCykle: "dva dni", value: pieceForMminute * 2700 },
                { nameCykle: "tri dni", value: pieceForMminute * 4050 },
                { nameCykle: "štyri dni", value: pieceForMminute * 5400 },
                { nameCykle: "pät dni/ prac týžden", value: pieceForMminute * 6750 },
            ]
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    };
});

module.exports = router;