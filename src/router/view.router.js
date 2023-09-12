require('dotenv').config();
const express = require('express');
const renderTemplate = require('../lib/renderTemplate');

const Home = require('../view/Home');

const router = express.Router();

router.get('/', (req, res) => {
  // console.log('req.session', req.session);
  renderTemplate(Home, { user: req.session.user }, res);
});

module.exports = router;
