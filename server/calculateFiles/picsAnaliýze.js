const express = require("express");
const router = express.Router();

// Multer middleware – umožňuje prijímať obrázky vo formáte multipart/form-data.
// Používame memoryStorage(), takže obrázok sa NEUKLADÁ na disk.
// Multer uloží obrázok priamo do RAM a poskytne ho ako buffer v req.file.buffer.
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

// Jimp – knižnica na manipuláciu a analýzu obrázkov.
// POZOR: musí byť verzia 0.16.1, pretože novšie verzie nefungujú s require().
const Jimp = require("jimp");

// ===============================================
// POST /analyze – prijme obrázok a vypočíta jeho zanesenie
// ===============================================

router.post("/analyze", upload.single("file"), async (req, res) => {
    try {
        // 1. Kontrola, či multer dostal obrázok
        if (!req.file) {
            return res.status(400).json({ message: "No image uploaded" });
        }

        // 2. Multer uložil obrázok do bufferu (pamäte)
        const buffer = req.file.buffer;

        // 3. Načítanie obrázka v Jimp-e z bufferu
        //    Jimp.read dokáže prečítať PNG, JPG, JPEG atď.
        const img = await Jimp.read(buffer);

        // 4. Predspracovanie obrázka:
        //    - grayscale() zníži obrázok na jeden farebný kanál (intenzitu)
        //    - blur(3) odstráni šum a vyhladí plochy → lepšia threshold analýza
        img.grayscale().blur(3);

        // 5. Získanie základných informácií o obrázku
        const { width, height, data } = img.bitmap;

        let dirtyPixels = 0;
        const totalPixels = width * height;

        // 6. Prahovanie (threshold)
        //    Každý pixel má hodnotu 0–255 (0 = čierna, 255 = biela)
        //    Ak je pixel tmavší ako thresholdValue → považujeme ho za "zanesený"
        const thresholdValue = 128;

        // 7. Skenovanie celého obrázka pixel po pixeli
        img.scan(0, 0, width, height, function (x, y, idx) {
            // idx = index pixelu v byte array (R,G,B,A)
            const gray = data[idx]; // grayscale má rovnakú hodnotu pre R,G,B
            if (gray < thresholdValue) dirtyPixels++;
        });

        // 8. Výpočet percentuálneho zanesenia
        const percentDirty = (dirtyPixels / totalPixels) * 100;

        // 9. Odoslanie výsledku
        return res.json({
            zanesenie: Number(percentDirty.toFixed(2)), // zaokrúhlenie na 2 desatinné miesta
            unit: "%"
        });

    } catch (err) {
        // 10. Error handling – ak Jimp alebo multer zlyhá
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
