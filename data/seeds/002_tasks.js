
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: 'Learn',
          notes: "Notes 1",
          completed: true,
          project_id: 1
        },
        {
          description: "practice",
          notes: "Notes 2",
          completed: true,
          project_id: 1
        },
        {
          description: "fail",
          notes: "Notes 3",
          project_id: 1,
          completed: false
        },
        {
          description: 're-attempt',
          notes: "Everyday",
          project_id: 2,
          completed: false
        },
        {
          description: "pass",
          notes: "Daily",
          project_id: 2,
          completed: false
        },
        {
          description: "succeed",
          notes: "Joins",
          project_id: 3,
          completed: false
        },
        {
          description: 'move forward',
          notes: "Models",
          completed: true,
          project_id: 3
        },
        {
          description: "start over",
          notes: "windows",
          completed: true,
          project_id: 4
        },
        {
          description: "take a break",
          notes: "Note 2",
          project_id: 4,
          completed: false
        }
      ]);
    });
};
