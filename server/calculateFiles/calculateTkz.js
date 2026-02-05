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
    };

    if (data.idm == undefined) {
        return res.status(400).json({
            message: "Invalid input values"
        });
    };

    const obvod_kruhu = 2 * pi * (idm / 2);
    const plocha = breite * obvod_kruhu;
    const odobrany_objem = breite * obvod_kruhu * (pridavok / 2);

    const hodnota_úberu_na_stenu = data.pridavok / 2

    const luft_posuv = data.aufmass - data.pridavok;
    const luft_posuv_čas = luft_posuv * data.luft

    const posuv_prvy_hrub = data.pridavok - data.zbk1;
    const posuv_prvy_hrub_cas = posuv_prvy_hrub * data.v1;


    const posuv_bordmass_po_aufmass = bordmass - aufmass;
    const posuv_bordmass_po_aufmass_čas = posuv_bordmass_po_aufmass / (rychloposuv / 1000);


    const hodnota_prveho_dotyku = 




    return res.status(200).json({
        message: {
            obvod_kruhu: obvod_kruhu,
            plocha: plocha,
            prídavok_stenu: pridavok / 2,
            odobrany_objem: odobrany_objem,
            hodnota_úberu_na_stenu: hodnota_úberu_na_stenu,

        }
    })
})

module.exports = router;