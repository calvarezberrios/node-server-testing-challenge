
exports.up = function(knex) {
    return knex.schema
        .createTable("users", tbl => {
            tbl.increments();
            tbl.string("fname", 128).notNullable();
            tbl.string("lname", 128).notNullable();
            tbl.string("email", 128).notNullable().unique();
            tbl.varchar("username", 128).notNullable().unique();
            tbl.varchar("password", 128).notNullable();
            tbl.integer("dependents").defaultTo(0);
            tbl.string("marital_status", 128).defaultTo("Single");
        })
        .createTable("income", tbl => {
            tbl.increments();
            tbl.string("employer", 128).notNullable();
            tbl.double("pay_rate", 2).notNullable();
            tbl.string("pay_type", 128).notNullable().defaultTo("hourly");
            tbl.string("pay_frequency", 128).notNullable().defaultTo("biweekly");
            tbl.double("overtime", 2).defaultTo(1.5);
            tbl.varchar("username", 128)
                .unsigned()
                .notNullable()
                .references("users.username")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
        .then(() => console.log("\n*** Created Tables, Ready To Seed ***\n"));
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("income")
        .dropTableIfExists("users")  
};
