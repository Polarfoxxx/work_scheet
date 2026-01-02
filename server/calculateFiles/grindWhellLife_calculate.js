const express = require("express");
const router = express.Router();

router.get("/whellLife", async (req, res) => {
    try {
        const maxWheel = Number(req.query.maxWhell);
        const minWheel = Number(req.query.minWhell);
        const nSharpening = Number(req.query.n_sharpening);
        const xSharpening = Number(req.query.x_sharpening);
        const cycleTime = Number(req.query.cykleTime);
        const productionMistake = Number(req.query.productionMystake || 0);

        // validácia vstupov
        if (
            !maxWheel ||
            !minWheel ||
            !nSharpening ||
            !xSharpening ||
            maxWheel <= minWheel
        ) {
            return res.status(400).json({
                message: "Invalid input values"
            });
        }

        const totalWear = maxWheel - minWheel;
        const wearPerSharpening = Number((totalWear / xSharpening).toFixed(2));

        let lifePerSharpening = Number(
            (wearPerSharpening * nSharpening).toFixed(2)
        );

        // započítanie výrobných chýb
        if (productionMistake > 0) {
            lifePerSharpening = Number(
                (lifePerSharpening * (1 - productionMistake / 100)).toFixed(2)
            );
        }

        const lifePerTime = Number(
            (lifePerSharpening * cycleTime).toFixed(2)
        );

        const lifePerWorkShift = Math.round(lifePerTime / 450);

        return res.status(200).json({
            message: {
                withMistake: productionMistake > 0,
                wearPerSharpening,          // počet ostrení
                lifePerSharpening,          // počet dielov
                lifePerTime,                // čas životnosti v minútach
                lifePerWorkShift            // životnosť v pracovných zmenách
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

module.exports = router;
