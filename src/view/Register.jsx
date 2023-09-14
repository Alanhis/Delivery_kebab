const React = require('react');
const Layout = require('./Layout');

function Register() {
  return (
    <Layout place>
      <form
        className="register-container"
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
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="user" value="user" />
            <label className="form-check-label" htmlFor="user">
              Заказчик
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="curier" value="curier" checked />
            <label className="form-check-label" htmlFor="curier">
              Курьер
            </label>
          </div>
        </div>
        <div id="map" data-x="55.758031" data-y="37.710387" style={{ width: '500px', height: '370px' }} />
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
