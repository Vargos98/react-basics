import React from 'react'
import { useContext } from 'react';
import { UserContext } from './utils/Context'
const User = () => {
  const {users, setUser} = useContext(UserContext);
  return (
    <>
      <div>
      <h1>User Lists</h1>
    </div>
    <div>
      {users.map((user)=>{ return(
        <div>
        <p>{user.name}</p>
        <h1>{user.city}</h1>
        </div>

      )
        
        
      })}
    </div>
    </>
  )
}

export default User