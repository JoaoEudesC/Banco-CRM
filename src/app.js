// configuraçaão dos modulos
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors());
require("dotenv").config();

const router = require("./routes/userRoutes")
app.use(express.json())

const db = require("./config/database")
db.connect();







//Rotas
app.use(router)

app.use("/users" , router)













module.exports = app;