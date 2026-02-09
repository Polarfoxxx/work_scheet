

function calculate_Nova2G(data) {

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
};


module.exports = calculate_Nova2G