const express = require('express');
const router = express.Router();
const pool = require('./database');

// Rota para listar os dados do currículo
router.get('/curriculo', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM curriculo');
        res.json(result.rows);
    } catch (err) {
        console.error('Erro ao consultar o banco de dados:', err.message);
        res.status(500).json({ error: 'Erro ao acessar o banco de dados.' });
    }
});

module.exports = router;

