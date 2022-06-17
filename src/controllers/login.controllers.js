const knex = require('../database/connection');
const { compare } = require('bcryptjs');


module.exports = {
    async create(request, response){
        const {nome, senha} = request.body;
        const user = await knex('users').where({nome}).first();

        if(!user){
            return response.status(400).json({error: 'email ou senha inválidos.'});
        }

        const pass_match = await compare(senha, user.senha);

        if(!pass_match){
            return response.status(400).json({error: 'email ou senha inválidos.'});
        }

        return response.json({message: 'ok'});
    }

}