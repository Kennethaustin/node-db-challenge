
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: "Sprint Challenge", description: "Learn db design" },
        { name: "Study ", description: "Practice methods" },
        { name: "Practice ", description: "dont give up" },
        { name: "Perfect" }
      ]);
    });
};
