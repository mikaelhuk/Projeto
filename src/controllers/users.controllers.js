const knex = require('../database/connection');
const { hash } = require('bcryptjs');

module.exports = {
    async create(request, response) {
        const { nome, senha } = request.body;
        const verifica_usu = await knex('users').where({
            nome: nome
        }).first();
        if (verifica_usu) {
            return response.status(400).json({
                message: 'Já tem esse nome'
            })
        }
         const hash_senha = await hash(senha, 8);
        await knex('users').insert({ nome, senha: hash_senha });
        return response.status(200).json({
            message: 'God'
        })
    }
}
