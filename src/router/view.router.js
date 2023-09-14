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

router.get('/login', async (req, res) => {
  renderTemplate(Login, {}, res);
});

router.get('/register', async (req, res) => {
  renderTemplate(Register, {}, res);
});

module.exports = router;
