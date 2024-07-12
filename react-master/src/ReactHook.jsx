import React from 'react'
import { useForm } from 'react-hook-form';
const ReactHook = () => {
  const { register, handleSubmit} = useForm();
   const onSubmit = (data)=> {
    console.log(data)
    // submit form data to server here
    //...

  }
  return (
    


    <div className='w-full h-screen bg-zinc-700'>
      <div className='w-[80%] h-screen mx-auto bg-zinc-200 container flex justify-center items-center'>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <p>Enter Full name</p>
        <input type="text" placeholder='Name' {...register('name')}  className=' px-2 py-2 rounded-xl '/>
        <p>Enter email</p>
        <input type="text" placeholder='Email' {...register('email')}  className=' px-2 py-2 rounded-xl '/>
        <p>Enter password</p>
        <input type="password" placeholder='Password' {...register('password')}  className=' px-2 py-2 rounded-xl '/>
        <button className='px-4 py-2 bg-white text-blue-500 ml-10 rounded-2xl text-lg' type='submit'>Submit</button>
      </form>

      </div>

    </div>
  )
}

export default ReactHook