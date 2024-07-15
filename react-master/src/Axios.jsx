import React from 'react'
import axios from 'axios';
import errorcode from 'qr-image/lib/errorcode';

const Axios = () => {
  const getproducts = ()=>{
    const api = "https://fakestoreapi.com/products";
    axios.get(api).then(products =>{
      console.log(products);
    }).catch(err => console.error(err));
  };
  return (
    <div className='w-full h-screen bg-zinc-500 flex items-center justify-center'>
      <button onClick={getproducts} className='px-4 py-2 bg-zinc-100 rounded-full'>Click me! </button>
    </div>
  )
}

export default Axios