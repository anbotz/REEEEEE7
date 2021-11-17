require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// public
app.use(express.static(path.join(__dirname, "public")));


app.listen(process.env.PORT, () => {
    console.log("serveur ok");
});