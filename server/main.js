const cutSpeed = require("./calculateFiles/CutSpeed_calculate");

const express = require("express");
require('dotenv').config();
const app = express();
const cors = require("cors");
const Port = 5000;
const localhost = process.env.REACT_APP_LOCALHOST;
const publicSite = process.env.REACT_APP_PUPLIC;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: [localhost, publicSite],
    credentials: true
}));


//! Middleware for seting CORS header manual
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", localhost);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

//! CRUD Endpoints
app.use('/calculate', cutSpeed); 

//! run server
app.listen(Port, () => console.log(`connect to port ${Port}`));