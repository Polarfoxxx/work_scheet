const express = require("express");
const { calculate_Nova2G, calculate_NovaPGE } = require("./tools");
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
    sqrt,
    boolean
} = require("mathjs")

router.get("/calculateTz", async (req, res) => {
    const data = {
        machineType: (String(req.query.machineType)),
        idm: (Number(req.query.idm)),
        adm: (Number(req.query.adm)),
        breite: (Number(req.query.breite)),
        aufmass: (Number(req.query.aufmass)), /* 0,500 */
        bordmass: (Number(req.query.bordmass)), /* 0,500 */
        autotast_zap: req.query.autotast_zap,
        autotast_dotyk: (Number(req.query.autotast_dotyk)),
        pridavok: (Number(req.query.pridavok)), /* 0,300 */
        rychloposuv: (Number(req.query.rychloposuv)),
        zbk1: (Number(req.query.zbk1)),
        zbk2: (Number(req.query.zbk2)),
        zbk3: (Number(req.query.zbk3)),
        zbk4: (Number(req.query.zbk4)),
        luft: (Number(req.query.luft)),
        v1: (Number(req.query.v1)),
        v2: (Number(req.query.v2)),
        v3: (Number(req.query.v3)),
        sl: (Number(req.query.sl)),
        t: (Number(req.query.t)),
        sr: (Number(req.query.sr)),
        idealny_uber: (Number(req.query.ideal_uber))
    };

    if (data.idm == undefined) {
        return res.status(400).json({
            message: "Invalid input values"
        });
    };

    switch (data.machineType) {
        case "NOVA_2G":
            return calculate_Nova2G(data, res);
        case "NOVA_PGE_U_M":
            return calculate_NovaPGE(data, res);
        case "NOVA_4G":
            return calculate_Nova4G(data, res);
        default:
            return res.status(400).json({
                message: 'Neznámy typ stroja'
            });
    };
});

module.exports = router;