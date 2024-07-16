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
        <p>{user.name}</p>

      )
        
        
      })}
    </div>
    </>
  )
}

export default User