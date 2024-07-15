// import React, { useState } from 'react'
import CardTwo from './CardTwo'
import Counter from './Counter'
import Banned from './Banned'
import UpdateVal from './UpdateVal'
import NewVal from './NewVal'
import ImageSlider from './ImageSlider'
// import Drilling from './Drilling'
// import Button from './Button'
// import RefForm from './RefForm'
import ReactHook from './ReactHook'
import Axios from './Axios'
import Fetch from './Fetch'


const App = () => {

  // const [users, setUsers] = useState([]);
 

  return (
    <div>

      <CardTwo/>
      <Counter/>
      <Banned/>
      <UpdateVal />
      <NewVal/>
      <ImageSlider/>
      {/* <Drilling/> */}
      {/* <Button text="13" color="bg-red-700"/>
      <RefForm /> */}
      <ReactHook/>
      <Axios/>
      <Fetch />
    </div>
  )
}

export default App