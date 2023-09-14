const React = require('react');
const Layout = require('./Layout');

module.exports = function Curier( { user, newor, ordered, delivered, completed } ) {
    return (
        <Layout user={user}>
        <div style={{marginTop: '3%', marginBottom: '8%'}}>
            <button type="button" class="btn btn-primary" id='newOrder'>Создать новый заказ</button>
            <table class="table" className='row row-cols-1' >
                <thead>
                    <tr>
                        <th scope="col">Название</th>
                        <th scope="col">Номер заказа</th>
                        <th scope="col">Цена</th>  
                        <th scope="col">Статус</th>
                    </tr>
                </thead>
                <tr>
                    <th colspan="4">Новые</th>
                </tr>
                {
                    newor?.map((order) => (
                        <tr class="table-primary">
                            <td>{order['Item.name']}</td>
                            <th>{order.id}</th>
                            <td>{order.price}</td>
                            <td>
                                <button type="button" class="btn btn-light" id='deleteNewOrder' name='deleteNewOrder'>
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    ))
                }
                <tr>
                    <th colspan="4">Заказаны</th>
                </tr>
                {
                    ordered?.map((order) => (
                        <tr class="table-warning">
                            <td>{order['Item.name']}</td>
                            <th>{order.id}</th>
                            <td>{order.price}</td>
                            <td>
                                <button type="button" class="btn btn-light" id='orderStatus'>
                                    Подробнее
                                </button>
                            </td>
                        </tr>
                    ))
                }
                <tr>
                    <th colspan="4">В доставке</th>
                </tr>
                {
                    delivered?.map((order) => (
                        <tr class="table-danger">
                            <td>{order['Item.name']}</td>
                            <th>{order.id}</th>
                            <td>{order.price}</td>
                            <td>
                                <button type="button" class="btn btn-light" id='deliverStatus'>
                                    Подробнее
                                </button>
                            </td>
                        </tr>
                    ))
                }
                <tr>
                    <th colspan="4">Завершённые заказы</th>
                </tr>
                {
                    completed?.map((order) => (
                        <tr class="table-success">
                            <td>{order['Item.name']}</td>
                            <th>{order.id}</th>
                            <td>{order.price}</td>
                            <td>Доставлен</td>
                        </tr>
                    ))
                }
            </table>
        </div>
        {/* <script defer src='/js/statusOrder.js'/> */}
        <script defer src='/js/deleteNewOrder.js' />
        </Layout>
    );
}