const knex = require('../database/connection');
const { compare } = require('bcryptjs');
const authConfig = require('../config/auth');
const { sign } = require('jsonwebtoken');


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

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
          subject: user.id.toString(),
          expiresIn,
        });
    
        delete user.senha;
    
        return response.json({ user, token });
    }

}