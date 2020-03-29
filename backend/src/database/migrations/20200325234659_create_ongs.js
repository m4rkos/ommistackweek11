
exports.up = function(knex) {
    return knex.schema.hasTable('ongs').then(function(exists) {
        if (!exists) {
            return knex.schema.createTable('ongs', function(t) {
                t.string('id').primary();
                t.string('name', 200).notNullable();
                t.string('email', 200).notNullable();
                t.string('whatsapp', 30).notNullable();
                t.string('city').notNullable();
                t.string('uf', 2).notNullable();
            });
        }
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
