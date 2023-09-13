require('dotenv').config();
const express = require('express');
const renderTemplate = require('../lib/renderTemplate');

const Home = require('../view/Home');

const router = express.Router();

const { Order, User, Item } = require('../../db/models');

router.get('/', async (req, res) => {
  const orders = await Order.findAll({
    include: [{ model: Item }],
  });

  renderTemplate(Home, { orders, user: req.session.user }, res);
});

module.exports = router;
