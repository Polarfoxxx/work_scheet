const cutSpeed = require("./calculateFiles/cutSpeed_calculate");
const userLogIn = require("./servicesLogin/servicesLogin");
require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const Port = 5000;
const WEB_SIDE = process.env.CURRENT_SIDE;

app.use(express.json());

app.use(cors({
    origin: [WEB_SIDE],
    credentials: true
}));


//! Middleware for seting CORS header manual
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", WEB_SIDE);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

//! CRUD Endpoints
app.use("/calculate", cutSpeed); 
app.use("/login", userLogIn)

//! run server
app.listen(Port, () => console.log(`connect to port ${Port}`));