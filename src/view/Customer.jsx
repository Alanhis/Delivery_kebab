const React = require('react');
const Layout = require('./Layout');
const CardItem = require('./components/CardItem');

module.exports = function Customer({ foods }) {
    console.log(foods);
    return (
        <Layout>
            {/* карточки товаров в сортировке от новых к старым */}
            <div className="account-card-container">
                {foods.map((food) => (
                    <CardItem food={food} />
                ))}
            </div>
            


            {/* список(таблица) с ранее заказанными и принятыми заказами */}

        </Layout>
    );
}