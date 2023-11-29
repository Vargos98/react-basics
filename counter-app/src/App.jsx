import React from 'react'
import { useState } from 'react';
import './index.css';
const App = () => {
    const [count, setCount] = useState(0);

    const increament= ()=> setCount(count+1);
    const decreament= ()=> setCount(count-1);
    const reset= ()=> setCount(0);
  
    return (
    

    <div>
        <h1 className='count'>{count}</h1>
        <div className="btn-box">
        <button className='btn' onClick={increament}>+</button>
        <button className='btn'onClick={decreament}>-</button>
        <button className='btn'onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default App