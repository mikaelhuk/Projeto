/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable(
        'eventos', function(table){
            table.bigIncrements('id');
            table.bigInteger('user_id').notNullable();
            table.foreign('user_id').references('id').inTable('users');
            table.string('descrição').notNullable();
            table.timestamp('hora_de_início').notNullable();
            table.timestamp('hora_de_término').notNullable();
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
