const express = require('express'); // Framework web
const bodyParser = require('body-parser'); // Middleware para JSON
const routes = require('./routes'); // Importa as rotas
const pool = require('./database'); // Importa o pool para gerenciamento

const app = express();
const PORT = 3003;

// Middleware para interpretar JSON
app.use(bodyParser.json());

// Conecta as rotas
app.use('/api', routes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Gerencia o encerramento do servidor e do pool de conexões
process.on('SIGINT', async () => {
    console.log('\nEncerrando servidor...');
    try {
        await pool.end(); // Encerra todas as conexões no pool
        console.log('Conexões com o banco de dados encerradas.');
    } catch (err) {
        console.error('Erro ao encerrar conexões com o banco:', err.message);
    } finally {
        process.exit(0); // Finaliza o processo
    }
});

process.on('SIGTERM', async () => {
    console.log('\nEncerrando servidor...');
    try {
        await pool.end();
        console.log('Conexões com o banco de dados encerradas.');
    } catch (err) {
        console.error('Erro ao encerrar conexões com o banco:', err.message);
    } finally {
        process.exit(0);
    }
});

