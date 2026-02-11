

function calculate_Nova2G(data, res) {

    const obvod_kruhu = 2 * pi * (idm / 2);
    const plocha = breite * obvod_kruhu;
    const odobrany_objem = breite * obvod_kruhu * (pridavok / 2);

    const idealy_uber_cas = odobrany_objem / data.idealy_uber

    const hodnota_úberu_na_stenu = data.pridavok / 2

    const rychloposuv_posuv = data.aufmass - data.pridavok;
    const rychloposuv_posuv_čas = rychloposuv_posuv / data.rychloposuv

    const posuv_prvy_hrub = data.pridavok - data.zbk1;
    const posuv_prvy_hrub_cas = posuv_prvy_hrub / data.v1;

    const posuv_druhy_hrub = data.zbk2 - data.zbk1
    const posuv_druhy_hrub_cas = posuv_druhy_hrub / data.v2;

    const posuv_treti_hrub = data.zbk3 - data.zbk2
    const posuv_treti_hrub_cas = posuv_treti_hrub / data.v3;

    const posuv_dobrus = data.idm - data.zbk4;
    const posuv_dobrus_čas = posuv_dobrus / data.t;
};


return res.status(200).json({
    message: {
        obvod_kruhu,
        plocha,
        prídavok_stenu: pridavok / 2,
        odobrany_objem,
        hodnota_úberu_na_stenu
    }
});

module.exports = calculate_Nova2G