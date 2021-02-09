const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const slackRouter = require('./routes/SlackRouter');
const slack = require('./controllers/SlackController');
let $fileName ='./slackMessages.txt';

var port = !!process.env.PORT && process.env.PORT || 8080;
let bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use('/slack',slackRouter);
const server = app.listen(port, () => {
    console.info('App is listening on port: ',port);
});

fs.watchFile($fileName,(event,filename)=>{
    fs.readFile($fileName,'utf-8',(err,data) => {
        data.split('\n').forEach((row,index) => {

            let line = JSON.parse(row);

            slack.postDataToSlack(line,null) 
                .then((response) => {
                    console.log('Response : ',response);
                })
                .catch((error) => {
                    console.log('Error : ', error);
                });

        });
    });
});


module.exports = server;


