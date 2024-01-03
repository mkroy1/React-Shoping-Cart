

import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
const cartImg="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
  const products = [
    { id: 1, name: 'Product 1', price: 10, image: cartImg },
    { id: 2, name: 'Product 2', price: 20, image: cartImg },
    { id: 3, name: 'Product 3', price: 30, image: cartImg },
    { id: 4, name: 'Product 4', price: 10, image: cartImg },
    { id: 5, name: 'Product 5', price: 20, image: cartImg },
    { id: 6, name: 'Product 6', price: 30, image: cartImg },
  ];

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (item) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      );
    } else {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    }
  };

  return (
    <div className="container mt-4">
      <div>
        <Navbar/>
      </div>
      <h1>Shop in Style</h1>
      <div className="row">
        <div className="col-md-8">
          <ProductList products={products} onAddToCart={addToCart} />
        </div>
        <div className="col-md-4">
          <Cart cartItems={cartItems} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} />
        </div>
      </div>
    </div>
  );
};

export default App;



















