const express = require("express");
const router = express.Router();
const connectDB = require("../DB/connect_to_mongoo");

router.post("/user", async (req, res) => {
    const { username, password } = req.body;

    try {
        const data = await connectDB()   // zavoláš funkciu
        const findUser = data.find(user => user.userName === username && user.password === password);
        if (!findUser) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        return res.status(200).json({ message: "OK", data });
    } catch (error) {
        console.error("❌ Chyba v /user route:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
