const { response } = require('express');
const knex = require('../database/connection');

module.exports = {

    async index(request, response) {
        const {user_id} = request.params;
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

    async delete(request, response) {

    },

    async update(request, response) {


    }
}

