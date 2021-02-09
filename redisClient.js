const redis = require('redis');
const {promisify} = require('util');

var redisClient = redis.createClient(6379, 'redis');

const REDIS_USER_DATA_INDEX = 2;

redisClient.select(REDIS_USER_DATA_INDEX);

redisClient.on('connect', function () {
    console.info('Redis is connected')
}).on('error', function (error) {
    console.log(error);
});

module.exports = {
  ...redisClient,
  getAsync: promisify(redisClient.get).bind(redisClient),
  setAsync: promisify(redisClient.set).bind(redisClient),
  keysAsync: promisify(redisClient.keys).bind(redisClient),
  hGetAllAsync: promisify(redisClient.HGETALL).bind(redisClient)
};

