import React from 'react';
import Product from './Product';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-3" key={product.id}>
          <Product product={product} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
