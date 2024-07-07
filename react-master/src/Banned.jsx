import React,{useState} from 'react'

const Banned = () => {
  const[val,setVal] = useState({name:'Umesh', isBanned:true});
  return (
    <div className='w-full h-screen bg-zinc-700 flex justify-center items-center flex-col'>
   
     <h1 className='text-7xl text-white mb-2'>{val.name}</h1>
     <h2 className='text-6xl text-white'>Banned : {val.isBanned.toString()}</h2>
     <button onClick={()=>setVal({...val,isBanned:!val.isBanned})} 
     
     className={`px-6 py-2 ${val.isBanned ? "bg-red-500" :"bg-blue-500"} rounded-full text-white text-2xl mt-10`}>Update</button>
   </div>
  )
}

export default Banned