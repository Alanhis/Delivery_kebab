const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Curier } = require('../../db/models');

router.post('/login', async (req, res) => {
  try {
    console.log('req.body----->', req.body);
    const login = req.body.userlogin;
    const name = req.body.username;
    const { password } = req.body;
    if (req.body.flexRadioDefault === 'user') {
      const user = await User.findOne({ where: { login }, raw: true });
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        req.session.user = {
          id: user.id,
          login: user.login,
          name: user.name,
          role: 'user',
        };
        res.redirect('/account');
      } else {
        res.redirect('/');
      }
    } else {
      const user = await Curier.findOne({ where: { login }, raw: true });
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        req.session.user = {
          id: user.id,
          login: user.login,
          name: user.name,
          role: 'curier',
        };
        res.redirect('/');
      } else {
        res.redirect('/');
      }
    }
    // const { login, password } = req.body;
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.post('/register1', async (req, res) => {
  try {
    // console.log('req.body----->', req.body);
    const login = req.body.userlogin;
    const name = req.body.username;
    const { password } = req.body;
    const { telephone } = req.body;
    const { coordinateX } = req.body;
    const { coordinateY } = req.body;
    if (req.body.flexRadioDefault === 'user') {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        login, name, password: hashPassword, telephone, coordinateX, coordinateY,
      });

      req.session.user = {
        id: user.id,
        login: user.login,
        name: user.name,
        // coordinateX: user.coordinateX,
        // coordinateY: user.coordinateY,
        role: 'user',
      };
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const curier = await Curier.create({
        login, name, password: hashPassword, telephone,
      });
      req.session.user = {
        id: curier.id,
        login: curier.login,
        name: curier.name,
        role: 'curier',
      };
    }
    // const { login, password } = req.body;
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
