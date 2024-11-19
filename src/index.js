const express = require('express'); // Framework web
const bodyParser = require('body-parser');
const routes = require('./routes'); 
const pool = require('./database'); 

const app = express();

app.use(bodyParser.json());

// Conecta as rotas
app.use('/api', routes);

const PORT = process.env.PORT || 3003;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Gerencia o encerramento do servidor e do pool de conexões
process.on('SIGINT', async () => {
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


