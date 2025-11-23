//! --- Imports ---
const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
//! --- Local imports ---
const cutSpeed = require("./calculateFiles/cutSpeed_calculate");
const whellRot = require("./calculateFiles/whellRot_calculate");
const cykleTime = require("./calculateFiles/cykleTime_calculate");
const userLogIn = require("./servicesLogin/servicesLogin");
const picsAnalyze = require("./calculateFiles/picsAnaliýze");
const grindWhellLife = require("./calculateFiles/grindWhellLife_calculate");
//! --- Config ---
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//! --- Middleware ---
app.use(express.json());
app.use(
  cors({
    origin: true, //! povolí požiadavky z rovnakého pôvodu (frontend aj backend spolu)
    credentials: true,
  })
);

//! --- API routes ---
app.use("/calculateCutSpeed", cutSpeed);
app.use("/calculateWhellrot", whellRot);
app.use("/cykleTime", cykleTime);
app.use("/picsAnalyze", picsAnalyze);
app.use("/grindWhellLife", grindWhellLife);
app.use("/login", userLogIn);

//! --- Pripojenie statickeho suboru v tomto pripade buildu ---
const clientPath = path.join(__dirname, "../client/build");
app.use(express.static(clientPath));

//! --- Serve React frontend --- 
app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(clientPath, "index.html"));
});

//! --- Run server ---
app.listen(process.env.PORT || 5000, () =>
  console.log(`✅ Server running on port ${process.env.PORT || 5000}`)
);

