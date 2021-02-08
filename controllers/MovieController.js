const MovieModel = require('../models/MovieModel');
const ActorModel = require('../models/ActorModel');
const ActorService = require('../controllers/ActorController');

module.exports = {
    createMovie(req,res) {
        if(req.body == null) throw new Error('Request body is invalid!');
        const id = require('crypto').randomBytes(16).toString("hex");
        try{
            let movieBody = {
                title,
                description,
                cast
            } = req.body;
            movieBody.cast =  movieBody.cast.map((actor_uuid) => {
                return{
                    uuid: actor_uuid
                }
            });
            let newMovie = new MovieModel({...movieBody,...{uuid:id}});

            newMovie.save((err,actor) => {
                if(err) res.status(400).send('Unable to save Movie!');
                res.status(200).send(actor);
            });
        }catch(err){
            throw new Error('Exception while trying to save movie : ', err);
        }
    },
    editMovie(req,res){

    },
    async retrieveMovies(req,res){
        let param = !!req.params.title && req.params.title || null;
        console.log('params: ', req.params);
        if(!param){
            try{
                let movies = await MovieModel.find();
                res.status(200).send(movies);
            }catch(err){
                res.status(500).send(err);
            }
        }else{
            try{
                let movies = await MovieModel.find(
                    {
                        $or:[
                            {
                                title : {
                                    $regex : '.*' + param + '.*',
                                    $options:'i'
                                },
                            },
                            {
                                "description":{
                                    $regex : '.*' + param + '.*',
                                    $options:'i'
                                }
                            }
                        ]
                    }
                );
                res.send(movies);
            }catch(err){

            }
        }

    },
    deleteMovie(req,res){

    }
}