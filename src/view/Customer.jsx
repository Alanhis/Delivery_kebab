const React = require('react');
const Layout = require('./Layout');
const CardItem = require('./components/CardItem');
const StatusCard = require('./components/StatusCard');

module.exports = function Customer({ user, foods, orders }) {
    console.log(orders);
    return (
        <Layout user={user}>
            <div className='row row-cols-1 row-cols-md-3 g-4' style={{marginTop: '3%', marginBottom: '8%'}}>
                {foods.map((food) => (
                    <CardItem food={food} />
                ))}

                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th> 
                        <th scope="col">Статус</th>
                        </tr>
                    </thead>
                    {
                        orders.map((order) => (
                            <StatusCard order={order} />
                        ))
                    }
                </table>
            </div>
        </Layout>
    );
}