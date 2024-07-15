import React, { useState, useEffect } from 'react';

function Fetch() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='w-full h-fit bg-zinc-400   '>
      <h1 className='text-4xl mb-10'>Products fetched via Fetch method</h1>
      <ul className='flex gap-4 flex-col py-2 '>
        {products.map(product => (
          <li className='w-[80%] h-fit bg-orange-400 rounded-2xl' key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
