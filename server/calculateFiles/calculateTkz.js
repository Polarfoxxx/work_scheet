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
    sqrt,
    boolean
} = require("mathjs")

router.get("/calculateTz", async (req, res) => {
    const data = {
        idm: (Number(req.query.idm)),
        adm: (Number(req.query.adm)),
        breite: (Number(req.query.breite)),
        aufmass: (Number(req.query.aufmass)),
        bordmass: (Number(req.query.bordmass)),
        autotast_zap: req.query.autotast_zap,
        autotast_dotyk: (Number(req.query.autotast_dotyk)),
        pridavok: (Number(req.query.pridavok)),
        v1: (Number(req.query.v1)),
        v2: (Number(req.query.v2)),
        v3: (Number(req.query.v3)),
        sl: (Number(req.query.sl)),
        t: (Number(req.query.t)),
        sr: (Number(req.query.sr)),
    };

    if (data.idm == undefined) {
        return res.status(400).json({
            message: "Invalid input values"
        });
    };

    const obvod_kruhu = 2 * pi * (idm / 2);
    const plocha = breite * obvod_kruhu;
    const odobrany_objem = breite * obvod_kruhu * (pridavok / 2);



    return res.status(200).json({
        message: {
            obvod_kruhu: obvod_kruhu,
            plocha: plocha,
            prídavok_stenu: pridavok / 2,
            odobrany_objem: odobrany_objem

        }
    })
})

module.exports = router;