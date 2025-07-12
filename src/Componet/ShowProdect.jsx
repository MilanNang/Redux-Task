import React from 'react';
import { useSelector } from 'react-redux';

function ShowProduct() {
  const products = useSelector((state) => state.prodect);

  return (
    <div className='l'>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <strong>{product.name}</strong> | Price: {product.price} | Category: {product.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShowProduct;
