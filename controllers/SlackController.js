
const $http = require('axios').default;
const hostName = 'https://slack.com/api/';
const headers = {
    'Content-Type': 'application/json',
    Authorization : `Bearer ${process.env.SLACK_AUTH_TOKEN}`
};

$http.defaults.headers = {Authorization : `Bearer ${process.env.SLACK_AUTH_TOKEN}`}

module.exports = {
    async getSlackChannels(){
        return await $http.get(hostName+'conversations.list');
    },
    async postDataToSlack(req,res){
        let payload = {
            channel,
            text
        } = req;
        return await $http.post(hostName + 'chat.postMessage', payload)
    }
}