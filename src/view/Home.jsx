const React = require('react');
const Layout = require('./Layout');
const OrderCard = require('./OrderCard');

module.exports = function Home({ allNewOrders, newOrdersForCourier, user }) {
  return (
    <Layout user={user}>
      {(user?.role === 'user' || !user) && (
        <div className='container__order'>
          <div className='row row-cols-1 row-cols-md-3 g-4 grid gap-5 column-gap-5 row justify-content-center'>
            {allNewOrders &&
              allNewOrders.map((order) => (
                <OrderCard key={order.id} order={order} user={user} />
              ))}
          </div>
        </div>
      )}
      {user?.role === 'curier' && (
        <div className='container__order'>
          <div className='row row-cols-1 row-cols-md-3 g-4 grid gap-5 column-gap-5 row justify-content-center'>
            {newOrdersForCourier &&
              newOrdersForCourier.map((order) => (
                <OrderCard key={order.id} order={order} user={user} />
              ))}
          </div>
        </div>
      )}
    </Layout>
  );
};
