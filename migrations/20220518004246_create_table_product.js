/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('produtos', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.float('price')
        table.integer('autorId').references('id')
            .inTable('usuarios').notNull()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('produtos')
};
