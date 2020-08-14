const router = require('express').Router();
const Solo = require('./soloLevelingModel.js');

router.get('/', (req,res) => {
  Solo.getCharacters()
   .then(charc => {
     res.status(200).json(charc);
   })
   .catch(error => {
     res.status(500).json(error);
   });
})

router.post('/characters', (req, res) => {
  Solo.add()
  .then(charc => {
    res.status(200).json(charc);
  })
  .catch(err => {
    res.status(500).json(error);
  });

})

router.delete('/characters', (req,res) => {
  Solo.removeCharacter()
  .then(charc => {
    res.status(200).json(charc);
  })
  .catch(err =>{
    res.status(500).json(error);
  });
})

module.exports = router;
