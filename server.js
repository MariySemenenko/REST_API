
const express = require('express');

const path = require("path");
const configPath = path.join(__dirname, "config", ".env");

require("dotenv").config({ path: configPath });//create conection through dotenv

require("colors")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
const connectDb = require("./config/conectDb")

app.use("/api/v1/", require('./routes/filmRoutes'))

connectDb()


app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}!`.green.italic.bold);
})

