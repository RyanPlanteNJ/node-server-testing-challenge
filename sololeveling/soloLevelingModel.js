const db = require('../data/connection.js');

module.exports = {
  add,
  findCharacterById,
  getCharacters,
  removeCharacter
}

async function add(charc) {
  const [id] = await db('characters').insert(charc);
  return db('characters').where({ id }).first();
}

function getCharacters(){
    return db('characters');
}

function findCharacterById(id) {
  return db('characters')
  .where({ id })
}

function removeCharacter(id) {
  return findCharacterById(id)
  .then(charc => {
    db('characters')
    .del()
    .where('id',id)
    return charc
  })
}
