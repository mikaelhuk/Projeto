/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable(
        'users', function(table){
            table.bigIncrements('id');
            table.string('nome').notNullable();
            table.string('senha').notNullable();
        }
    );
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  

    return knex.schema.dropTable('users');
};
