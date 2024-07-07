import React from 'react'

const CardTwo = () => {
  const data = [

    {
      img:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      name: 'Mahiya Ve',
      desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque assumenda fuga dolorem explicabo eius?',
      isAvailable : true
    },
    {
      img:"https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8fHww",
      name: 'Chak de india',
      desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque assumenda fuga dolorem explicabo eius?',
      isAvailable : false
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1682294457336-4f1b253d06c2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljfGVufDB8fDB8fHww",
      name: 'Eminem',
      desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque assumenda fuga dolorem explicabo eius?',
      isAvailable : true
    },
    {
      img:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww",
      name: 'Badshaah',
      desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque assumenda fuga dolorem explicabo eius?',
      isAvailable : true
    },
    {
      img:"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljfGVufDB8fDB8fHww",
      name: 'Rockstar',
      desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque assumenda fuga dolorem explicabo eius?',
      isAvailable : false
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1682614337066-4b0d8e21d6e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG11c2ljfGVufDB8fDB8fHww",
      name: 'Lil Nas',
      desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque assumenda fuga',
      isAvailable : false
    }
  ]
  const handleClick = () => {
    alert();
  }
  
  return (
    <div className='w-full h-screen bg-zinc-800 flex flex-wrap justify-center  items-center gap-4'>
     {data.map((elem,index)=>{
      return(
        <div key={index} className=' w-80 px-3 py-2 bg-zinc-100 rounded-md'>
        <img className="rounded-xl mb-2"src={elem.img} alt={elem.img} />
        <h3 className='font-semibold text-xl border-b-4'>{elem.name}</h3>
        <p className='text-xs mt-2'>{elem.desc}</p>
        <button onClick={handleClick} className={`px-2 py-1  text-xs font-semibold ${elem.isAvailable ? 'bg-blue-400':'bg-gray-300'} ${
        elem.isAvailable ? 'text-zinc-100':'text-black'} rounded mt-3`}>{elem.isAvailable ? "Listen Now" : "Not Available" }</button>
      </div>
      );
      
     })}
    </div>
  )
}

export default CardTwo