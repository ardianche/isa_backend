const router = require('express').Router();
const movie = require('../controllers/MovieController');


router.get('/', (req,res) => {
    //Retrieve movies
});

router.post('/', (req,res) => {
    //Create movie
});

router.put('/', (req,res) => {
    //Edit movie
});

module.exports = router;