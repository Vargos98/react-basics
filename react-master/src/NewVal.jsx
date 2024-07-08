import React, { useState } from 'react'

const NewVal = () => {

  const [val, setVal] = useState(false);

  return (
    <div className='w-full h-screen text-center bg-zinc-600 py-40 '>
      <h1 className='text-7xl mb-20 text-white'>
        {val === false ? 'Bahar jau' : 'Andar raho'}
      </h1>
      <button className={`px-8 py-2 ${val === true ? "bg-black":"bg-red-600"} text-white rounded-full`} 
      onClick={() => setVal(!val)}>Toggle</button>
    </div>
  )
}

export default NewVal;