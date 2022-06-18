const { response } = require('express');
const knex = require('../database/connection');

module.exports = {

    async index(request, response, next) {
        try{
            const { user_id } = request.params;
            const results = await knex('eventos').where('user_id', user_id);
            return response.json(results)
        }catch (error){
            next(error);
        }
    },

    async create(request, response) {
        const { user_id, descrição, hora_de_início, hora_de_término, data } = request.body;

        await knex('eventos').insert({ user_id, descrição, hora_de_início, hora_de_término, data });
        return response.status(200).json({
            message: 'God'
        })
    },

    async delete(request, response, next) {
        try {
            const { id } = request.params;
            await knex('eventos').where({ id }).del();

            return response.send();
        } catch (error) {
            next(error);
        }



    },

    async update(request, response, next) {
        try {
            const body = { user_id, descrição, hora_de_início, hora_de_término, data } = request.body;
            const { id } = request.params;


            await knex('eventos').update(body).where('id', id);
            return response.send()

        } catch (error) {
            next(error)
        }

    }
}

