import React from 'react'
import axios from 'axios';
import errorcode from 'qr-image/lib/errorcode';

const Axios = () => {
  const getproducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios.get(api).then(products => {
      console.log(products);
    }).catch(err => console.error(err));
  };
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
      <div className='w-full h-screen bg-zinc-500 flex items-center justify-center gap-10'>
        <button onClick={getproducts} className='px-4 py-2 bg-zinc-100 rounded-full'>Click me! </button>
        <button onClick={addproducts} className='px-4 py-2 bg-zinc-800 text-white rounded-full'>Add Product </button>
      </div>
      
    </>
  )
}

export default Axios