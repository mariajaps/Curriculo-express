const pool = require('./database');

const criarTabela = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS curriculo (
            id SERIAL PRIMARY KEY,
            nome VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            telefone VARCHAR(20),
            descricao TEXT
        );
    `;

    try {
        await pool.query(query);
        console.log('Tabela criada com sucesso!');
    } catch (err) {
        console.error('Erro ao criar a tabela:', err.message);
    } finally {
        pool.end(); // Fechar a conexão com o banco após criar a tabela
    }
};

criarTabela();


