const express = require("express");
const router = express.Router();

router.get("/user", async (req, res) => {
    const { userName, password } = req.body;
    console.log("Received login request:", { userName, password });
    try {


    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    };
});

module.exports = router;