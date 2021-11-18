require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const path = require("path");

const db = require("./database");

const recipeRouter = require("./routers/recipeRouter");
const userRouter = require('./routers/userRouter')

db();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// public
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRouter);
app.use("/recipe", recipeRouter);


app.listen(process.env.PORT, () => {
    console.log("serveur ok");
});