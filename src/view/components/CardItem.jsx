const React = require("react");

module.exports = function AccountCard({ food }) {
  const foodImg = food?.img?.replace('public/', '');
  return (
    <div className="card" id={food?.id} style={{ width: "16rem" }} key={food.id}>
        <img src={foodImg} className="card-img-top" alt="вкусняшки" /> 
        <div className="card-body">
            <h5 className="card-title">{food.name}</h5>
            <p className="card-text item-date">{food.about}</p>
            <p className="card-text item-price">{food.price}</p>
            <button type='button' className="btn btn-card">Выкупить</button>
        </div>
    </div>
  );
};