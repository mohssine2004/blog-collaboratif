require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');



const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à la base de données
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect()
  .then(() => console.log("✅ Connecté à PostgreSQL"))
  .catch(err => console.error("❌ Erreur de connexion", err));

// Routes
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()'); // Vérifie si la DB répond
    res.json({ message: "Connexion réussie ✅", time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ message: "Erreur de connexion ❌", error: err });
  }
});


app.listen(port, () => {
  console.log(`Serveur sur http://localhost:${port}`);
});
// Récupérer tous les articles
app.get('/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM poste ORDER BY date_creation DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
});

// Ajouter un article
app.post('/posts', async (req, res) => {
  const { titre, contenu } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO poste (titre, contenu) VALUES ($1, $2) RETURNING *',
      [titre, contenu]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
});

// Supprimer un article
app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM poste WHERE id_p = $1', [id]);
    res.send("Article supprimé !");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
});
