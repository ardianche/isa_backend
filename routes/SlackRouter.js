const router = require('express').Router();
const slack = require('../controllers/SlackController');


router.get('/', (req,res) => {
    slack.getSlackChannels()
        .then((response) => {
            res.status(200).send(response.data);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});

router.post('/', (req,res) => {
    slack.postDataToSlack(req.body)
        .then((response) =>{
            res.status(200).send(response.data);
        })
        .catch(error => {
            res.status(400).send(error);
        });
});

module.exports = router;