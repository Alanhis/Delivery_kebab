const React = require('react');
const Layout = require('./Layout');
const OrderCard = require('./OrderCard');

module.exports = function HomeCurier({ curierOrders, user }) {
  console.log('CUUUUUUUURIERS', curierOrders);
  return (
    <Layout user={user}>
      <div className='container__order'>
        <div className='row row-cols-1 row-cols-md-3 g-4 grid gap-5 column-gap-5 row justify-content-center'>
          {curierOrders &&
            curierOrders.map((order) => (
              <OrderCard key={order.id} order={order} user={user} />
            ))}
        </div>
      </div>
    </Layout>
  );
};
