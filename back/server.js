const express = require('express');
const mariadb = require('mariadb');
require('dotenv').config();
const app = express();

const pool = mariadb.createPool({
    host: process.env.MARIADB_HOST,
    port: process.env.MARIADB_PORT,
    database: process.env.MARIADB_DB,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
})

app.get("/", (req,res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h>TEST</h1>");
})

app.get("/tweets", (req,res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>TWEETS</h1>")
})

app.get("/tweets/:id", (req,res) => {
    const id = parseInt(req.params.id)
})

app.get("/tweetos", (req,res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Tweetos</h1>")
})

app.get("/tweetos/:id", (req,res) => {
    const id = parseInt(req.params.id)
})

app.listen(process.env.DB_PORT, () => {
    console.log("Server UP on " + process.env.DB_PORT)
})