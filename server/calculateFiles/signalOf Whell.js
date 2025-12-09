const express = require('express');
const router = express.Router();


router.get('/signalOfWhell', (req, res) => {
    const {
        valueAllPieces,
        countTprm,
        maxWheel_value,
        minWheel_value,
        sharpenedWheel_interval,
        sharpenedWheel_value,
        supply_interval
    } = req.query;

    console.log(countTprm,maxWheel_value,minWheel_value,sharpenedWheel_interval,sharpenedWheel_value)

    try {
        const cbnWorkSize = maxWheel_value - minWheel_value                             //! pracovná oblast kotuca
        const countSharpening = ((cbnWorkSize / 1000) / sharpenedWheel_value)           //! pocet orovnani pocas zivotnosti
        const cbnWorkLife = countSharpening * sharpenedWheel_interval                   //! pocet vyproduvaných dielov na kotúč 

        const coefficientMaschineSetting = countTprm * 1                                //! kooficient početnosti nastavovania

        const settingMashine_mistakes = 20                                             //! chybý nastavenia
        
        return res.status(200).json({ message: cbnWorkLife })

    } catch (error) {
        return res.status(500).json({ message: "interval server error" })
    }
});

module.exports = router;


