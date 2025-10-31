//! --- Imports ---
const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

//! --- Local imports ---
const cutSpeed = require("./calculateFiles/cutSpeed_calculate");
const whellRot = require("./calculateFiles/whellRot_calculate");
const userLogIn = require("./servicesLogin/servicesLogin");

//! --- Config ---
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const WEB_SIDE = process.env.CURRENT_SIDE || "http://localhost:3000";

//! --- Middleware ---
app.use(express.json());
app.use(cors({
  origin: [WEB_SIDE],
  credentials: true,
}));

//! optional manual headers (môžeš vynechať, keď používaš cors())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", WEB_SIDE);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

//! --- API routes ---
app.use("/calculateCutSpeed", cutSpeed);
app.use("/calculateWhellrot", whellRot);
app.use("/login", userLogIn);

//! --- Serve React frontend ---
const clientPath = path.join(__dirname, "../client/build");
app.use(express.static(clientPath));

//! ak požiadavka nepasuje na žiadne API, pošli React index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

//! --- Run server ---
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
