const express = require("express");
const router = express.Router();

router.get("/analyze", async (req, res) => {
    const { speed, dia } = req.query;

    try {

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    };
});

module.exports = router;