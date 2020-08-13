const db = require("../data/db-config.js");

module.exports = {
    findAll,
    findBy,
    findById,
    add,
    remove,
    update
}

function findAll() {
    return null;
}

function findById(id) {
    return db("users").where({ id }).first();
}

function findBy(filter) {
    return db("users").where(filter).first();
}

function add(user) {
    return db("users").insert(user, "id").first()
        .then(id => {
            return findById(id);
        });
}

function remove(id) {
    return null;
}

function update(changes, id) {
    return null;
}