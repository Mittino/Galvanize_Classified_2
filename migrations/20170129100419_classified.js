
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classifieds', function(table){
    table.increments().notNullable();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('price',8, 2).notNullable();
    table.string('item_image').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classifieds');
};
