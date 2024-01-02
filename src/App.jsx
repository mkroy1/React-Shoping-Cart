

import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
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



















// ====================================================
// import { useState } from 'react'
// import './App.css'
// import ProductList from './pages/ProductList'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <div>
//           Shop in style
//         </div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid">
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">About</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Shop
//                   </a>
//                   <ul className="dropdown-menu">
//                     <li><a className="dropdown-item" href="#">All Products</a></li>
//                     <li><hr className="dropdown-divider"/></li>
//                     <li><a className="dropdown-item" href="#">Popular Items</a></li>
//                     <li><a className="dropdown-item" href="#">New Arrivals</a></li>
//                   </ul>
//                 </li>
              
//               </ul>
//               <button className="btn btn-outline-success" type="submit">Search</button>

//             </div>
//           </div>
//       </nav>

//         <ProductList/>
//       </div>
        
//     </>
//   )
// }

// export default App
