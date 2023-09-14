const router= require("express").Router();

const { Op } = require("sequelize");

const render = require("../lib/renderTemplate");
const CurierView = require("../view/Curier");
const AddSeller = require('../view/AddSeller');

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
        const { id } = req.body;

        console.log(id);

        try {
            await Order.destroy({
                where: { id }
            });
            res.sendStatus(200);
        } catch (error) {
            console.error(error);
            res.sendStatus(400);
        }

    });


//newOrder
router.get('/newOrder', async (req, res) => {
    try {
      const food = await Item.findAll({ raw: true });
      render(AddSeller, { food, user: req.session.user }, res);
    } catch (error) {
      console.error(error);
    }
  });
  
router.post('/newOrder', async (req, res) => {
try {
    const {
    coordinateX, coordinateY, price, discount, foodId,
    } = req.body;
    const curierId = req.session.user.id;
    await Order.create({
    coordinateX, curierId, coordinateY, price, discount, foodId, status: 'New',
    });
    res.send({ status: 200 });
} catch (error) {
    console.log(error);
}
});

module.exports = router;