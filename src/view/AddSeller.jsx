const React = require('react');
const Layout = require('./Layout');

function AddSeller({ user, food }) {
  return (
    <Layout title="Home page" user={user} place="30c5ab22-e7fa-4f57-8369-b3e0f20e52f5">
      <form className="d-flex flex-column" style={{ alignContent: 'center', flexWrap: 'wrap' }} id="addSellForm">
        <label htmlFor="id">
          Номер заказа
          <input
            id="foodId"
            name="foodId"
            className="form-control"
            type="text"
            list="food"
            placeholder="Введите номер заказа"
            required
          />
          {food ? (
            <datalist id="food">
              {food.map((i) => (
                <option value={i.id} label={i.name} />
              ))}
            </datalist>
          ) : ''}
        </label>
        Текущие местоположение
        <div id="map" data-x="55.758031" data-y="37.710387" style={{ width: '500px', height: '370px' }} />
        <label htmlFor="price">
          Исходная цена
          <input
            id="price"
            className="form-control"
            name="price"
            type="number"
            placeholder="Введите изначальную цену"
            required
          />
        </label>
        <label htmlFor="discount">
          Скидка (в %)
          <input
            id="discount"
            name="discount"
            className="form-control"
            type="number"
            min={0}
            max={100}
            placeholder="Введите % скидки"
            required
          />
        </label>
        <button className="btn btn-primary" type="submit">Добавить </button>
      </form>
    </Layout>
  );
}

module.exports = AddSeller;
