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

//! --- Middleware ---
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

//! --- API routes ---
app.use("/calculateCutSpeed", cutSpeed);
app.use("/calculateWhellrot", whellRot);
app.use("/login", userLogIn);

//! --- Serve React frontend ---
const clientPath = path.join(__dirname, "../client/build");
app.use(express.static(clientPath));

//! --- Catch-all for React Router ---
app.get("/*/", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

//! --- Run server ---
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
