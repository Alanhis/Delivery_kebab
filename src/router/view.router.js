require('dotenv').config();
const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const { Item } = require('../../db/models');

const Home = require('../view/Home');
const Login = require('../view/Login');
const Register = require('../view/Register');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    renderTemplate(Home, {user: req.session.user}, res);
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
