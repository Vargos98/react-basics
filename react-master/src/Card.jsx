import React from 'react'

const Card = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
      <div className='w-52 bg-zinc-100  overflow-hidden rounded-md'>
        <div className='w-full h-32 bg-zinc-300 '>
          <img  className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522780550166-284a0288c8df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW1hem9ufGVufDB8fDB8fHww" alt="" />
        </div>
        <div className='w-full px-3 py-4'>
          <h2 className='font-semibold'>Amazon basics</h2>
          <p className='text-xs mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis </p>
        </div>
      </div>
      
    </div>
  )
}

export default Card