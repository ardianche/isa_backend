const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActorModel = new Schema({
    uuid : {type: String,required:false},
    firstName : {type:String,required:false},
    lastName: {type:String, required:false},
    gender: {type:String, required:false}
});

module.exports = mongoose.model('Actor',ActorModel);