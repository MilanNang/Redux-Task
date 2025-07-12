import React from 'react';
import { useSelector } from 'react-redux';

function ShowProduct() {
  const products = useSelector((state) => state.prodect);

  return (
    <div className='l'>
      <h2>Product List</h2>
      
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <strong>{product.name}</strong> | Price: {product.price} | Category: {product.category}
            </li>
          ))}
        </ul>
      
    </div>
  );
}

export default ShowProduct;
