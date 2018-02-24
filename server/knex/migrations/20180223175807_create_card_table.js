exports.up = function(knex, Promise) {
  return knex.schema.createTable('card', function(table) {
    table.increments('card-id#');
    table.text('title');
    table.text('priority');
    table.text('status');
    table.text('created_by');
    table.text('assigned_to');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('card');
};