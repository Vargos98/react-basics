import React from 'react'

const Card = () => {

  const arr = [{
    name: 'Amazon basics',
    img: 'https://images.unsplash.com/photo-1522780550166-284a0288c8df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW1hem9ufGVufDB8fDB8fHww',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis',
    inStock: true,
  },
  {
    name: 'FireFox',
    img: 'https://plus.unsplash.com/premium_photo-1686236985349-86f52d6eb0a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW1hem9ufGVufDB8fDB8fHww',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
    inStock: false,
  },
  {
    name: 'React Native',
    img: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVhY3R8ZW58MHx8MHx8fDA%3D',
    desc: 'Lorem ipsum dolor, ',
    inStock: true,
  }

  ]



  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
      {arr.map((item, index) => (

        <div key={index} className='w-52 bg-zinc-100  overflow-hidden rounded-md'>
          <div className='w-full h-32 bg-zinc-300 '>
            <img className="w-full h-full object-cover" src={item.img} alt="" />
          </div>
          <div className='w-full px-3 py-4'>
            <h2 className='font-semibold'>{item.name}</h2>
            <p className='text-xs mt-5'>{item.desc}</p>
            <button className={`px-3 py-1 ${item.inStock ? 'bg-sky-600' : 'bg-black'} 
            text-gray-100 rounded mt-4 text-xs`}>
              {item.inStock ? "In Stock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Card