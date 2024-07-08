import { useState } from "react";
import React from 'react'
import { BiDownArrowAlt } from "react-icons/bi"
const ImageSlider = () => {
  
  const [val,setVal] = useState(false);
  return (
   
    <div className='w-full h-screen flex items-center justify-center bg-zinc-800'
    > 

    <div className='w-96 h-56 bg-zinc-400 rounded-lg relative   overflow-hidden'>
      <img className={`shrink-0 ${val=== false ? "-translate-y-[0%]":"-translate-y-[100%]"} w-full h-full object-fit rounded-lg transition-transform duration-500`} src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww" alt='' />
      <img className={`shrink-0 ${val=== false ? "-translate-y-[0%]":"-translate-y-[100%]"} w-full h-full object-fit rounded-lg transition-transform duration-500`} src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww" alt='' />
      <span onClick={()=>setVal(()=>!val)} className={`absolute  bg-[#bdbdbd8e] h-10 w-10 flex items-center justify-center top-[45%] left-[45%] rounded-full hover:bg-white ${val=== false ? "transition-transform duration-500 animate-bounce":"transition-transform duration-500 animate-bounce"}`}> 
      <BiDownArrowAlt  size={25} />
      </span>
    </div>

    </div>
  )
}

export default ImageSlider