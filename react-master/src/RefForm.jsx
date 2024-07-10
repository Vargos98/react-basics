import React ,{useRef} from 'react'

const useRefForm = () => {
  
  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);
  const handleSubmit = (data) =>{
    data.preventDefault();
    console.log(name.current.value) 
    console.log(age.current.value) 
    console.log(email.current.value) 
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input ref={name} type="text" placeholder='name'/>
      <input ref={age} type="number" placeholder='age'/>
      <input ref={email} type="email" placeholder='email'/>
      <input type="submit" /> 
    </form>
  )
}

export default useRefForm