const express = require('express');
const router = express.Router();


router.get('/signalOfWhell', (req, res) => {
    const { sharpedWhell_value } = req.query;

    // Example calculation logic
    const signalStrength = sharpedWhell_value * 10; // Dummy calculation        
    res.json({ signalStrength });
});

module.exports = router


