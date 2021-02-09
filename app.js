const express = require('express');
const fs = require('fs')
const app = express();
const cors = require('cors');
const jobQueue = require('./queues/JobQueue');

let port = !!process.env.PORT && process.env.PORT || 8080;
let bodyParser = require('body-parser');
let redisClient = require('./redisClient');

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

const server = app.listen(port, () => {
    console.info('App is listening on port: ',port);
});


fs.readFile('./jobs.txt', 'utf8' ,(err, data) => {
  if (err) {
    console.error(err)
    return
  }
  try{
    let jobs = JSON.parse(JSON.stringify(data.split('\n')));
    jobs.forEach((job) => {
        jobQueue.add({job: job});
    });
  }catch(err){
      console.error("ERROR : ",err);
  }
})

module.exports = server;


