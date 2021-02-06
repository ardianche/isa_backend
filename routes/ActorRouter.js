const router = require('express').Router();
const actor = require('../controllers/ActorController');


router.get('/', (req,res) => {
    //Retrieve Actors
});

router.post('/', (req,res) => {
    //Create Actor
});

router.put('/', (req,res) => {
    //Edit Actor
});

module.exports = router;