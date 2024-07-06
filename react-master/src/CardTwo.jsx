import React from 'react'

const CardTwo = () => {
  const data = [
    {name: 'Mahiya Ve',
      desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque assumenda fuga dolorem explicabo eius?',
      isAvailable : true
    },
    {
      name: 'Chak de india',
      desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque assumenda fuga dolorem explicabo eius?',
      isAvailable : false
    },
    {
      name: 'Eminem',
      desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque assumenda fuga dolorem explicabo eius?',
      isAvailable : true
    },
    {
      name: 'Badshaah',
      desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque assumenda fuga dolorem explicabo eius?',
      isAvailable : true
    },
    {
      name: 'Rockstar',
      desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque assumenda fuga dolorem explicabo eius?',
      isAvailable : false
    }
  ]
  
  
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col justify-center  items-center gap-4'>
     {data.map((elem,index)=>{
      return(
        <div key={index} className=' w-80 px-3 py-2 bg-zinc-100 rounded-md'>
        <h3 className='font-semibold text-xl'>{elem.name}</h3>
        <p className='text-xs mt-2'>{elem.desc}</p>
        <button className={`px-2 py-1  text-xs font-semibold ${elem.isAvailable ? 'bg-blue-400':'bg-gray-300'} ${
        elem.isAvailable ? 'text-zinc-100':'text-black'} rounded mt-3`}>{elem.isAvailable ? "Listen Now" : "Not Available" }</button>
      </div>
      );
      
     })}
    </div>
  )
}

export default CardTwo