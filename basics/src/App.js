import React from 'react'
import Mobile from './Mobile'
import mobileList from './mobileList.json'
export default function App() {
  
    const items = mobileList.map((ele)=>{
    return (
    <div>
      <h1>Rendering Mobile lists</h1>
      <div>
        <Mobile title={ele.title} price={ele.price} image={ele.image}/>
      </div>
    </div>
    })
    
  )
}
