const router = require('express').Router();
const actor = require('../controllers/ActorController');


router.get('/:actor?', (req,res) => {
    actor.retrieveActors(req,res);
});

router.post('/', (req,res) => {
    actor.createActor(req,res);
});

router.put('/', (req,res) => {
    //Edit Actor
});

module.exports = router;