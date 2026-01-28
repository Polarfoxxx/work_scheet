const express = require("express");
const router = express.Router();
const {
    atan2,
    chain,
    derivative,
    e,
    evaluate,
    log,
    pi,
    pow,
    round,
    sqrt
} = require("mathjs")

router.get("/calculateTz", async (req, res) => {
    const data = {
        idm: (Number(idm.res.query))
    };

    if (data.idm == undefined) {
        return res.status(400).json({
            message: "Invalid input values"
        });
    };

    const df = round(e, 3)
})

module.exports = router;