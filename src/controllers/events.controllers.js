const { response } = require('express');
const knex = require('../database/connection');

module.exports = {

    async index(request, response) {
        const {user_id} = request.query;
        const results = await knex('eventos').where('user_id', 2)
        return response.json(results)
    },

    async create(request, response) {
        const { user_id, descrição, hora_de_início, hora_de_término, data } = request.body;

        await knex('eventos').insert({ user_id, descrição, hora_de_início, hora_de_término, data });
        return response.status(200).json({
            message: 'God'
        })
    },

    async delete(request, response, next) {
        try{const {id} = request.query;
        await knex('eventos').where({id}).del();

        return response.send();
    }catch(error) {
        next(error);
    }
        


    },

    async update(request, response, next) {
        try{
            const body = { user_id, descrição, hora_de_início, hora_de_término, data } = request.body;
            const {id} = request.query;


            await knex('eventos').update(body).where('id', id);
            return response.send()

        }catch (error){
            next(error)
        }

    }
}

