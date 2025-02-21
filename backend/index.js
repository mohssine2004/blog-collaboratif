require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration de la connexion PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// Tester la connexion à PostgreSQL
pool.connect()
    .then(() => console.log("✅ Connexion à la base de données réussie !"))
    .catch(err => console.error("❌ Erreur de connexion à PostgreSQL :", err));

app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
