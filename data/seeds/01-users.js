
exports.seed = function(knex) {
  return knex("users").insert([
    {
      fname: "Test",
      lname: "Tester",
      email: "tester@lambdastudents.com",
      username: "tester",
      password: "1234",
      dependents: 0,
      marital_status: "Single"
    }
  ])
  .then(() => console.log("\n** Users table seeded successfully! **\n"));
};
