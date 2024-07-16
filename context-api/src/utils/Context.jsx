
import React from 'react'
import { createContext, useState }  from 'react'

export const UserContext = createContext()

const Context = (props) => {
  const [users, setUser] = useState([
    { name: 'John Doe', age: 30 , city:"San Francisco"},
    { name: 'Jane Doe', age: 28 , city:"los angelas"},
    { name: 'Alice Doe', age: 32, city:"Las Vegas"}
  ]);

  return (
    <UserContext.Provider value={{ users, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default Context