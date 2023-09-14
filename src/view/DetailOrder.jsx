const React = require('react');
const Layout = require('./Layout');

module.exports = function DetailOrder({ user, orders }) {
    return (
        <Layout user={user} place="30c5ab22-e7fa-4f57-8369-b3e0f20e52f5">
            <table class="table table-striped-columns table-hover" className='row row-cols-1' style={{margin: '3%'}}>
                <thead>
                    <tr>
                    <th colspan="2" style={{textAlign: 'center'}}>Детали заказа</th>
                    </tr>
                </thead>
                <tbody style={{textAlign: 'center'}}>
                    <tr>
                        <td>Название</td>
                        <td>{orders['Item.name']}</td>
                    </tr>
                    <tr>
                        <td>Цена</td>
                        <td>{orders.price}</td>
                    </tr>
                    <tr>
                        <td>Телефон</td>
                        <td>{orders['User.telephone']}</td>
                    </tr>
                </tbody>
            </table>
            <div id="map" data-x={orders['User.coordinateX']} data-y={orders['User.coordinateY']}  style={{ width: '100%', height: '60%' }} />
            
            <button type="button" class="btn btn-primary btnDelivered" data-id={orders.id}>Принять в доставку</button>
            <button type="button" class="btn btn-success btnCompleted" data-id={orders.id}>Доставлено</button>
        <script defer src='/js/status.js' />
        </Layout>
    );
}