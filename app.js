const express = require('express');
const app = express();
const router = express.Router();
var port = !!process.env.PORT && process.env.PORT || 8080;
const cors = require('cors');
const db = require('./db');
const actor = require('./routes/ActorRouter');
const movie = require('./routes/MovieRouter');

const authMW = require('./middleware/AuthenticationMiddleware');

let bodyParser = require('body-parser');

//Allow cross origin http requests for local environment
app.use(cors());

//Use body parser lib in order to fetch JSON format data in our endpoints
app.use(bodyParser.json());

app.use(express.urlencoded({extended:true}));

app.use(authMW);

app.use('/actor/', actor);

app.use('/movie/', movie);

//Open up the listener and expect requests.
const server = app.listen(port, () => {
    console.info('App is listening on port: ',port);
});

module.exports = server;


