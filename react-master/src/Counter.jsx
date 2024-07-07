import React, { useState } from 'react'


const Counter = () => {
let[count, updateCount] = useState(0);
const Increment =() => {
  updateCount(count + 1);
} 
const Decrement =() => {
  if(count > 0){
    updateCount(count - 1);
  }else{
    count = 0;
  }
} 
return (
    <div className='w-full h-screen bg-zinc-500 flex justify-center items-center flex-col'>
      <h1 className='text-7xl text-white'>{count}</h1>
      <div className='flex justify-center items-center gap-5 mt-10'>
        <button onClick={Increment} className='px-6 py-2 bg-red-600 rounded-full text-white text-2xl '>Increment</button>
        <button onClick={Decrement} className='px-6 py-2 bg-blue-600 rounded-full text-white text-2xl '>Decrement</button>
      </div>
    </div>
  )
}

export default Counter