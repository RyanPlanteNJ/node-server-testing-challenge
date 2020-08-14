const db = require('../data/connection.js');
const Solo = require('./soloLevelingModel.js');



describe('solo leveling model', () => {
  describe('add()', () => {
    it('should add character into DB', async () => {
      await Solo.add({name: "Jin Seo"});
      await Solo.add({name: "Beru"});

      const characters = await db('characters');
      expect(characters).toHaveLength(6);
    });
  })

  describe('remove()', () => {
    it('removes chracters from DB', async () => {
      await Solo.removeCharacter({"id": 1});

      const characters = await db('characters');
      expect(characters).toHaveLength(5);

    })
  })

})
