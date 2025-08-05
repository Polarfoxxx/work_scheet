const express = require("express");
const router = express.Router();

router.post("/cutSpeed", async (req, res) => {
    const { username, password } = req.body;
    try {


    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    };
});

module.exports = router;