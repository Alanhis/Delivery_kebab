const router = require('express').Router();

const render = require('../lib/renderTemplate');
const Customer = require('../view/Customer');

const { Item } = require('../../db/models');

router.get('/', async (req, res) => {
    try {
        const activeOrder = await Item.findAll({ raw: true });
        render(Customer, { foods: activeOrder }, res);
    } catch (error) {
        console.error(error);
        res.sendStatus(404);
    }
    
});

/* router.get('/', async (req, res) => {
    try {
        const activeOrder = await Item.findAll(
            {
                
                raw: true
            }
        );
        render(Customer, { foods: activeOrder }, res);
    } catch (error) {
        console.error(error);
        res.sendStatus(404);
    }
    
}); */

module.exports = router;