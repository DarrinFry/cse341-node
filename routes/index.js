const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Someone I know')
});

module.exports = routes
