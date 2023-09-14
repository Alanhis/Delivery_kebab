const router= require("express").Router();

const { Op } = require("sequelize");

const render = require("../lib/renderTemplate");
const CurierView = require("../view/Curier");

const { Order, Item, Curier } = require('../../db/models');

router
    .get('/', async (req, res) => {
        const { user } = req.session;
        const newOrder = await Order.findAll({
            where: {
                curierId: user.id,
                status: 'New'
            },
            include: { model: Item, attributes: [ 'name' ] },
            raw: true
        });
        const order = await Order.findAll({
            where: {
                curierId: user.id,
                status: 'Ordered'
            },
            include: { model: Item, attributes: [ 'name' ] },
            raw: true
        });

        const del = await Order.findAll({
            where: {
                curierId: user.id,
                status: 'Delivery'
            },
            include: { model: Item, attributes: [ 'name' ] },
            raw: true
        });

        const comp = await Order.findAll({
            where: {
                curierId: user.id,
                status: 'Completed'
            },
            include: { model: Item, attributes: [ 'name' ] },
            raw: true
        });
        render(CurierView, { user, newor: newOrder, ordered: order, delivered: del, completed: comp}, res);
    })
    .delete('/', async (req, res) => {
        const { user } = req.session;

    });

module.exports = router;