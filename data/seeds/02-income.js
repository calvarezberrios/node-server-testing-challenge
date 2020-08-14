
exports.seed = function(knex) {
  return knex("income").insert([
    {
      employer: "Test Company",
      pay_rate: "15.00",
      pay_type: "hourly",
      pay_frequency: "biweekly",
      overtime: 1.5,
      username: "tester"
    }
  ])
  .then(() => console.log("\n** Income table seeded successfully! **\n"));
};
