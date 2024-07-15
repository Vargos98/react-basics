import React, { useState } from 'react'
import axios from 'axios';


const Axios = () => {
  const [products,setProducts] =useState([]);
  
  // Method to get products
  const getproducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios.get(api).then(products => {
      console.log(products);
      setProducts(products.data);
    }).catch(err => console.error(err));
  };
  
  
  // Method to get Add products
  const addproducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios.post(api, {

      title: "Test Product",
      price: 99.99,
      description: "This is a test product.",
      image: "https://via.placeholder.com/150",
      category: "Electronics",

    }).then(products => {
      console.log(products);
    }).catch(err => console.error(err));
  };

  return (
    <>
      <div className='w-full h-fit bg-zinc-500 flex items-center justify-center gap-10 container'>
        <button onClick={getproducts} className='px-4 py-2 bg-zinc-100 rounded-full'>Click me! </button>
        <button onClick={addproducts} className='px-4 py-2 bg-zinc-800 text-white rounded-full'>Add Product </button>
        <hr  className='my-10'/>
      
      
      <ul>
      {products.length > 0 ? products.map(p => <li key={p.id} className='  bg-red-400 rounded-full px-5 py-2 m-2'>
         {p.title} {p.price + `$`} </li>): <h1>Loading....</h1> }
        
      </ul>
      
      </div>
      
      
    </>
  )
}

export default Axios