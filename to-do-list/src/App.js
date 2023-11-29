import {useState} from 'react';
import "./index.css";

function App() {

  function generateId(){
    return Math.floor(Math.random()*100);
  }
  function removeTodo(id){
    setTodos((todos)=>todos.filter((t)=>t.id !==id));
  }

  const[todos,setTodos] = useState([]);
  const[input,setInput] = useState("");

  function handleSubmit(){

    setTodos(todos =>
      todos.concat({
        text:input,
        id:generateId()
      })
      );
      setInput("");
   

  }
  return (
    <div className="container">
      <input className="input" type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='New To-Do'/>
      <button onClick={handleSubmit}>Submit</button>

    <ul className="items">
      {
        todos.map(({text,id})=>{
          return <li key={id} className='todo'>
            <span>{text}</span>
            <button className='close' onClick={()=>removeTodo(id)}>X</button>
          </li>
        })
      }
    </ul>


    </div>
  );
}

export default App;
