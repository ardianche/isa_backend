module.exports = function authenticateRequest(req,res,next){

    const auth = {login: 'isa_backend', password: 'canus_lupus'};
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';

    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')
    if (login && password && login === auth.login && password === auth.password) {
        return next()
    }

    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).send('Please provide Basic Authorization credentials!');
}