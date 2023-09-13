const router = require('express').Router();

const { Op } = require("sequelize");

const render = require('../lib/renderTemplate');
const Customer = require('../view/Customer');

const { Item, Order } = require('../../db/models');

router.get('/', async (req, res) => {
    const { user } = req.session;
    try {
        const activeOrder = await Item.findAll({ 
            include: [{
                model: Order,
                where: {
                    userId: user.id,
                    [Op.or]: [{ status: 'Ordered' }, { status: 'Delivered'}],
                },
            }],
            raw: true 
        });
        const completeOrder = await Order.findAll({
            where: {
                userId: user.id,
                status: 'Completed'
            },
            include: { model: Item, attributes: [ 'name' ] },
            raw: true
        });
        render(Customer, { user, foods: activeOrder, orders: completeOrder }, res);
    } catch (error) {
        console.error(error);
        res.sendStatus(404);
    } 
});

module.exports = router;