import { useState } from "react";
import React from 'react';

const App = () => {
  const data = [
    {
      name: 'Apple iPhone 12 Pro Max',
      price: 1099.99,
      quantity: 30,
      image: 'https://images.unsplash.com/photo-1609692814865-bfaef70b9c2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTIlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D',
      description: 'Smartphone with a 6.5-inch Super Retina XDR display, 6GB RAM, and 128GB storage',
      inStock: true,
    },
    {
      name: ' Kitchen Appliance',
      price: 19.99,
      quantity: 100,
      image: 'https://images.unsplash.com/photo-1713164394509-79e8c579c860?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8MHx8fDA%3D',
      description: 'kitchen appliance with a dishwasher, microwave, refrigerator, stove, and dishwasher',
      inStock: true,
    },
    {
      name: 'Samsung Galaxy S21 Ultra',
      price: 899.99,
      quantity: 50,
      image: 'https://images.unsplash.com/photo-1610792516286-524726503fb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyMSUyMHVsdHJhfGVufDB8fDB8fHww',
      description: 'Smartphone with a 6.7-inch Super AMOLED display, 128GB storage, and 5G connectivity',
      inStock: false,
    },
    {
      name: 'Nintendo Switch 2',
      price: 299.99,
      quantity: 25,
      image: 'https://plus.unsplash.com/premium_photo-1677668588685-eb14e6f43d3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5pbnRlbmRvJTIwc3dpdGNoJTIwMnxlbnwwfHwwfHx8MA%3D%3D',
      description: 'PlayStation 5-like console with a 64GB console card, 1TB storage, and 5G connectivity',
      inStock: true,
    },
    {
      name: 'Apple iPad Pro 11',
      price: 899.99,
      quantity: 40,
      image: 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBhZCUyMHByb3xlbnwwfHwwfHx8MA%3D%3D',
      description: 'iPad with a 11-inch Retina XDR display, 64GB storage, and Wi-Fi and cellular connectivity',
      inStock: false,
    },
    
  ];

  const  [Val, setVal] = useState({
    name: 'Umesh',
    age:26,
  });

  return (
    <div className='flex gap-10 mt-10 justify-center flex-wrap'>    
      {data.map((item, index) => (
        <div key={index} className='w-64 h-[380px] bg-zinc-500 rounded-md '>
          <img src={item.image} alt={item.image} className='w-full h-32 object-cover rounded-md' />
          <h1 className='text-white font-bold ml-2'>{item.name}</h1>
          <p className='text-white opacity-80 text-sm ml-2'>Price: ${item.price.toFixed(2)}</p>
          <p className='text-white opacity-80 text-sm ml-2'>Quantity: {item.quantity}</p>
          <p className='text-white text-sm ml-2 mt-4'>{item.description}</p>
          <button className={` text-white ${item.inStock ? `bg-blue-500` : `bg-green-500`} hover:bg-blue-600 rounded-md px-4 py-2 mt-5 ml-16`}>{item.inStock ? "In Stock" : "Out of Stock"}</button>
        </div>
      ))}




    </div>
  );
};

export default App;
