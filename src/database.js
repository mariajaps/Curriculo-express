const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL.includes('neon.tech') // Se o banco é Neon, habilita SSL
        ? { rejectUnauthorized: false }
        : false, // Caso contrário, desativa SSL
});

console.log('Pool de conexões configurado com sucesso!');

module.exports = pool; // Exporta o pool para ser usado em outros arquivos





