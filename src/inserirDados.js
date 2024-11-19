const pool = require('./database'); // Importa a conexão do banco

const inserirDados = async () => {
    const sql = `
        INSERT INTO curriculo (nome, email, telefone, descricao)
        VALUES ($1, $2, $3, $4)
        RETURNING *; -- Retorna os dados inseridos
    `;

    const valores = [
        'Maria Julia Alexandre',
        'mariajuliaalexandre1@gmail.com',
        '8199999999',
        'Profissional dedicada e em constante aprendizado na área de desenvolvimento de sistemas e tecnologias web, com foco em Flutter e APIs REST.'
    ];

    try {
        const resultado = await pool.query(sql, valores);
        console.log('Dados inseridos com sucesso:', resultado.rows[0]);
    } catch (erro) {
        console.error('Erro ao inserir os dados:', erro.message);
    } finally {
        pool.end(); // Encerra a conexão
    }
};

inserirDados();
