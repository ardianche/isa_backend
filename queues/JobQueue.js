let Queue = require('bull',{
    limiter: {
        max: 1000,
        duration: 5000
      }
});

let jobs = new Queue('jobProcessing', {
    redis:{
        port:6379,
        host: 'redis'
    }
});

jobs.process(5,function(job, done){
    job.progress(1);
    done();
  });

jobs.on('completed',(job) => {
    console.log('Job completed : ', job.id);
});

jobs.on('progress', (job) => {
    console.log('Job is in progress: ', job.id);
});

module.exports = jobs;