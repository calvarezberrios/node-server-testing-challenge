
exports.seed = function(knex) {
  return knex("users").insert([
    {
      fname: "Carlos",
      lname: "Alvarez",
      email: "carlos-alvarez-berrios@lambdastudents.com",
      username: "calvarez",
      password: "1234",
      dependents: 3,
      marital_status: "Married"
    }
  ])
  .then(() => console.log("\n** Users table seeded successfully! **\n"));
};
