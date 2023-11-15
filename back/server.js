const express = require('express');
const mariadb = require('mariadb');
var cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json())
app.use(cors())

const pool = mariadb.createPool({
    host: process.env.MARIADB_HOST,
    port: process.env.MARIADB_PORT,
    database: process.env.MARIADB_DB,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
})

app.get("/", async(req,res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const row = await conn.query('SELECT user FROM mysql.user;');
        res.status(200).json(row)
    }
    catch(err) {
        // Page d erreur lol
    }
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

app.post('/register', async (req, res) => {
    const { email, firstName, lastName, password } = req.body;
    try {
        const conn = await pool.getConnection();
        await conn.query('INSERT INTO utilisateur (email, nom, prenom, mdp) VALUES (?, ?, ?, ?)', [email, lastName, firstName, password]);
        conn.release();
        res.status(201).json({ message: 'Inscription réussie' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'inscription' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const conn = await pool.getConnection();
        const result = await conn.query('SELECT * FROM utilisateur WHERE email = ? AND mdp = ?;', [email, password]);

        if (result.length > 0) {
            res.status(200).json({ message: 'Connexion réussie' });
            console.log("Réussi");
        } else {
            res.status(401).json({ error: 'Adresse e-mail ou mot de passe incorrect' });
            console.log("Raté");
        }

        conn.release();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la connexion' });
    }
});

// app.get("tweetos/:id/changename")
// app.get("tweetos/:id/changefirstname")
// app.get("tweetos/:id/changemail")
// app.get("tweetos/:id/changepwd")

app.listen(process.env.DB_PORT, () => {
    console.log("Server UP on " + process.env.DB_PORT)
})