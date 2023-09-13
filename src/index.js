require('@babel/register');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const renderView = require('./router/view.router');
const userRouter = require('./router/user.router');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.locals = 'title LOCALS';

const sessionConfig = {
  name: 'Kebab',
  store: new FileStore(), // добавить после установки session-file-store
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 20 * 60 * 1000, // устанавливаем сколько живет кука (20 минут)
    httpOnly: true,
  },
};

app.use(expressSession(sessionConfig));

app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/', renderView);
app.use('/user', userRouter); // отвечает за всю логику связанную с юзером (Регистр, Логин, Логаут)

app.get('/*', (req, res) => {
  res.send('404 Page not found');
});

app.listen(PORT, () => {
  console.log(`Server starting on PORT ${PORT}`);
});


// npx sequelize-cli model:generate --name Food --attributes name:string,about:string,img:string
// npx sequelize-cli seed:generate --name Foods