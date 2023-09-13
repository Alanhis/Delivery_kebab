const router = require('express').Router();

const render = require('../lib/renderTemplate');
const Customer = require('../view/Customer');

router.get('/', (req, res) => {
    render(Customer, {}, res);
});

module.exports = router;