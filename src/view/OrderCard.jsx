const React = require('react');

module.exports = function OrderCard({ order, user }) {
  const orderImg = order?.Item?.img.replace('public/', '');
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={orderImg} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{order?.Item?.name}</h5>
        <p className='card-text'>{order?.Item?.about}</p>
        <p className='card-text'>
          Цена:{' '}
          <span className='text-decoration-line-through'>
            {order?.price} руб
          </span>{' '}
        </p>
        <p className='card-text'>Цена со скидкой: {order?.price - order?.price * (order?.discount / 100)} руб</p>
        <button
          type='button'
          className='btn btn-dark re_buy'
          disabled={!user || user.role === 'curier'} data-id={order.id}>
          Выкупить
        </button>
      </div>
    </div>
  );
};
