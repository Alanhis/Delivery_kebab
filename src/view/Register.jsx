const React = require('react');
const Layout = require('./Layout');

function Register() {
  return (
    <Layout>
      <form
        action="/login"
        method="POST"
        className="login-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '100px',
          gap: '5px',
        }}
      >
        <label htmlFor="userlogin" className="form-label">
          Логин
          <input
            id="userlogin"
            className="form-control"
            name="userlogin"
            type="text"
            placeholder="Введите логин"
            required
          />
        </label>
        <label htmlFor="username" className="form-label">
          Имя
          <input
            id="username"
            className="form-control"
            name="username"
            type="text"
            placeholder="Введите имя"
            required
          />
        </label>
        <label htmlFor="password" className="form-label">
          Пароль
          <input
            id="password"
            className="form-control"
            name="password"
            type="password"
            placeholder="Введите пароль"
            autoComplete="on"
            required
          />
        </label>
        <div>
            <p>Роль:</p>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Заказчик
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Курьер
            </label>
          </div>
        </div>
        <label htmlFor="telephone" className="form-label">
          Телефон
          <input
            id="teephone"
            className="form-control"
            name="telephone"
            type="text"
            placeholder="Введите телефон"
            autoComplete="on"
            required
          />
        </label>
        <br />
        <button className="btn btn-dark" type="submit">
          Войти в систему
        </button>
      </form>
    </Layout>
  );
}
module.exports = Register;
