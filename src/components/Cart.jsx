import React from 'react';

const Cart = ({ cartItems, onIncrease, onDecrease }) => {
  return (
    <div>
      <h3>Your Cart</h3>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name} x {item.quantity}
            <div>
              <button className="btn btn-success btn-sm mx-1" onClick={() => onIncrease(item)}>
                +
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => onDecrease(item)}>
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
