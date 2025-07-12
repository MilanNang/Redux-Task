import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Slice/ProdectSlice';

function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    
    dispatch(addProduct({ name, price, category }));
    setName('');
    setPrice('');
    setCategory('');
  };

  return (
    <div className='d1'>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name"
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      /><br></br><br></br>
      <input 
        type="number" 
        placeholder="Price"
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      /><br></br><br></br>
      <input 
        type="text" 
        placeholder="Category"
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
      /><br></br><br></br>
      <button type="submit">Add Product</button>
    </form>
  </div>
  );
}

export default AddProduct;
