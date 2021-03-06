/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable(
        'eventos', function(table){
            table.bigIncrements('id');
            table.bigInteger('user_id').notNullable();
            table.foreign('user_id').onDelete('CASCADE').references('id').inTable('users');
            table.string('descricao').notNullable();
            table.timestamp('inicio').notNullable();
            table.timestamp('termino').notNullable();
        }
    )
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('eventos');
};
