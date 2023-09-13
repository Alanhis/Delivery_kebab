const React = require('react');

module.exports = function OrderCard({ order }) {
  const orderImg = order?.Item?.img.replace('public/', '');
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={orderImg} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{order?.Item?.name}</h5>
        <p className='card-text'>{order?.Item?.about}</p>
        <a href='#' className='btn btn-dark'>
          Выкупить
        </a>
      </div>
    </div>
  );
};
