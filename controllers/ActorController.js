const ActorModel = require('../models/ActorModel');

// uuid : {type: String,required:false, default:id},
// firstName : {type:String,required:false},
// lastName: {type:String, required:false},
// gender: {type:String, required:false}

module.exports = {
    createActor(req,res) {
        if(req.body == null) throw new Error('Request body is invalid!');

        const id = require('crypto').randomBytes(16).toString("hex");

        try{
            let actorBody = {
                firstName,
                lastName,
                gender
            } = req.body;

            let newActor = new ActorModel({...actorBody,...{uuid: id}});

            newActor.save((err,actor) => {
                if(err) res.status(400).send('Unable to save Actor!');
                res.status(200).send(actor);
            });
        }catch(err){
            throw new Error('Exception while trying to save actor : ', err);
        }
    },
    editActor(req,res){

    },
    async retrieveActors(req,res){
        let param = !!req.params.actor && req.params.actor || null;
        console.log('params: ', req.params);
        if(!param){
            try{
                let actors = await ActorModel.find();
                res.status(200).send(actors);
            }catch(err){
                res.status(500).send(err);
            }
        }else{
            try{
                console.log('test ; ',param);
                let actors = await ActorModel.find(
                    {
                        "firstName" : param,
                    }
                );
                res.send(actors);
            }catch(err){

            }
        }
    },
    deleteActor(req,res){

    },

    async retrieveActorsByUuid(uuid){

            try{
                let actors = await ActorModel.find(
                    {
                        "uuid" : param,
                    }
                );
                res.send(actors);
            }catch(err){

            }
    },
}