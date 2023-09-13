const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login }, raw: true });
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
      req.session.user = {
        id: user.id,
        login: user.login,
      };
      res.redirect('/');
    } else {
      res.redirect('/');
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.post('/register', async (req, res) => {
  try {
    const { login, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ login, password: hashPassword });
    req.session.user = {
      id: user.id,
      login: user.login,
    };
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.redirect('/');
    } else {
      res.clearCookie('Kebab');
      res.redirect('/');
    }
  });
});

module.exports = router;
