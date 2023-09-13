require('dotenv').config();
const express = require('express');
const renderTemplate = require('../lib/renderTemplate');

const Home = require('../view/Home');
const Login = require('../view/Login');
const Register = require('../view/Register');

const router = express.Router();

const { Order, User, Item } = require('../../db/models');

router.get('/', async (req, res) => {
  const allNewOrders = await Order.findAll({
    where: { status: 'New' },
    include: [{ model: Item }],
  });
  const newOrdersForCourier = await Order.findAll({
    where: {
      curierId: req.session?.user?.id,
      status: 'New',
    },
    include: [{ model: Item }],
  });
  renderTemplate(Home, { allNewOrders, newOrdersForCourier, user: req.session.user }, res);
});

router.get('/login', async (req, res) => {
  renderTemplate(Login, {}, res);
});

router.get('/register', async (req, res) => {
  renderTemplate(Register, {}, res);
});

module.exports = router;
