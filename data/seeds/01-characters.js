exports.seed = async function(knex) {
  await knex('characters').insert([
        { name: "The Girl"},
        { name: "Evil Prophet Guy"},
      ])
};
