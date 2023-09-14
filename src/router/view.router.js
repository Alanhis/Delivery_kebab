require('dotenv').config();
const express = require('express');
const renderTemplate = require('../lib/renderTemplate');

const Home = require('../view/Home');
const HomeCurier = require('../view/HomeCurier');
const Login = require('../view/Login');
const Register = require('../view/Register');

const router = express.Router();

const { Order, User, Curier, Item } = require('../../db/models');

router.get('/', async (req, res) => {
  const allNewOrders = await Order.findAll({
    where: { status: 'New' },
    include: [{ model: Item }],
  });

  renderTemplate(Home, { allNewOrders, user: req.session.user }, res);
});

router.get('/homecurier', async (req, res) => {
  const curierOrders = await Order.findAll({
    where: { curierId: req.session?.user?.id },
    include: [{ model: Item }],
  });
  renderTemplate(HomeCurier, { curierOrders, user: req.session?.user }, res);
});

// router.get('/add', async (req, res) => {
//   try {
//     const food = await Item.findAll({ raw: true });

//     renderTemplate(AddSeller, { food, user: req.session.user }, res);
//   } catch (error) {
//     console.error(error);
//   }
// });

router.post('/add', async (req, res) => {
  try {
    const { coordinateX, coordinateY, price, discount, foodId } = req.body;
    const curierId = req.session.user.id;
    await Order.create({
      coordinateX,
      curierId,
      coordinateY,
      price,
      discount,
      foodId,
      status: 'New',
    });
    res.send({ status: 200 });
  } catch (error) {
    console.log(error);
  }
});

router.get('/login', async (req, res) => {
  renderTemplate(Login, {}, res);
});

router.get('/register', async (req, res) => {
  renderTemplate(Register, {}, res);
});

module.exports = router;
