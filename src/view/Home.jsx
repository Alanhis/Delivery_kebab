const React = require('react');
const Layout = require('./Layout');
const OrderCard = require('./OrderCard');

module.exports = function Home({ orders, user }) {
  console.log(orders);
  return (
    <Layout user={user}>
      <div className='container__order'>
        <div className='row row-cols-1 row-cols-md-3 g-4 grid gap-5 column-gap-5 row justify-content-center'>
          {orders &&
            orders.map((order) => (
              <OrderCard key={order.id} order={order} user={user} />
            ))}
        </div>
      </div>
    </Layout>
  );
};
