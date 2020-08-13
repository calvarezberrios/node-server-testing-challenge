
exports.seed = function(knex) {
  return knex("income").insert([
    {
      employer: "Mears Transportation",
      pay_rate: "15.00",
      pay_type: "hourly",
      pay_frequency: "biweekly",
      overtime: 0.0,
      username: "calvarez"
    }
  ])
  .then(() => console.log("\n** Income table seeded successfully! **\n"));
};
