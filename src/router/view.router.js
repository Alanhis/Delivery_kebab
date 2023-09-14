require('dotenv').config();
const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const { Item, Order } = require('../../db/models');
const Home = require('../view/Home');
const Login = require('../view/Login');
const Register = require('../view/Register');
const AddSeller = require('../view/AddSeller');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    renderTemplate(Home, { user: req.session.user }, res);
  } catch (error) {
    console.log(error);
  }
});
router.get('/add', async (req, res) => {
  try {
    const food = await Item.findAll({ raw: true });
    renderTemplate(AddSeller, { food, user: req.session.user }, res);
  } catch (error) {
    console.error(error);
  }
});
router.post('/add', async (req, res) => {
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
router.get('/login', async (req, res) => {
  renderTemplate(Login, {}, res);
});

router.get('/register', async (req, res) => {
  renderTemplate(Register, {}, res);
});

module.exports = router;
