const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crypto = require("crypto");

const id = crypto.randomBytes(16).toString("hex");


const MovieModel = new Schema({
    uuid : {type : String, required: false},
    title : {type: String, required:false},
    description : {type: String, required:false},
    cast: {type: Array, required:false}
});

module.exports = mongoose.model('Movie', MovieModel);