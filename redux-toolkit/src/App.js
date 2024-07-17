import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increamentByFive, increment, reset } from './reducers/counterSlice'

const App = () => {
  const {value} =useSelector((state)=>state.counter)
  const dispatch = useDispatch()

  return (
    <div className='m-auto pt-5 container  bg-red-300 '>
      <h1 className='text-bolder text-5xl text-red-900 text-center py-10 mb-5'>
        Counter : {value}
      </h1>

      <div className='text-center flex gap-5 justify-center py-10'>
        <button className='px-5 py-2 bg-red-700 rounded-full' onClick={()=>dispatch(increment())}>Increment</button>
        <button className='px-5 py-2 bg-blue-700 rounded-full' onClick={()=>dispatch(decrement())}>Decrement</button>
        <button className='px-5 py-2 bg-green-700 rounded-full' onClick={()=>dispatch(reset())}>reset</button>
        <button className='px-5 py-2 bg-yellow-700 rounded-full' onClick={()=>dispatch(increamentByFive())}>Incremnet by 5</button>
      </div>

    </div>
  )
}

export default App