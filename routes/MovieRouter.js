const router = require('express').Router();
const movie = require('../controllers/MovieController');


router.get('/:title?', (req,res) => {
    movie.retrieveMovies(req,res);
});

router.post('/', (req,res) => {
    movie.createMovie(req,res);
});

router.put('/', (req,res) => {
    //Edit movie
});

module.exports = router;