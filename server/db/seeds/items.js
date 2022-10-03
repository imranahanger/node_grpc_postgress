
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: "pen", price: '1'},
        {name: "pencil", price: '2'},
        {name: "book", price: '1'}
      ]);
    });
};
