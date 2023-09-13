require('dotenv').config();
const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const { Item } = require('../../db/models');

const Home = require('../view/Home');
const Login = require('../view/Login');
const Register = require('../view/Register');

const router = express.Router();

const { Order, User, Item } = require('../../db/models');

router.get('/', async (req, res) => {
  const orders = await Order.findAll({
    include: [{ model: Item }],
  });

  renderTemplate(Home, { orders, user: req.session.user }, res);
});

router.get('/login', async (req, res) => {
  renderTemplate(Login, {}, res);
});

router.get('/register', async (req, res) => {
  renderTemplate(Register, {}, res);
});

module.exports = router;
