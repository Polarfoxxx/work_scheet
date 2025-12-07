const express = require('express');
const router = express.Router();


router.get('/signalOfWhell', (req, res) => {
    const { 
        valueAllPieces,
        countTprm,
        n_sharpening,
        v_sharpening,
        wheelSignalInput,
        maxWheel_value,
        minWheel_value,
        sharpenedWheel_interval } = req.params;

    try {
        const cbnWorkSize = maxWheel_value - minWheel_value                 //! pracovná oblast kotuca
        const countSharpening = ((cbnWorkSize/1000) / v_sharpening)         //! pocet orovnani pocas zivotnosti
        const cbnWorkLife = countSharpening * n_sharpening                  //! pocet vyproduvaných dielov na kotúč 

        const coefficientMaschineSetting = null


    } catch (error) {
        
    }
});

module.exports = router


