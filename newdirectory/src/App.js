import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { useState, useEffect } from 'react';
const Person=(props)=> {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.ln}</h2>
      <h2>Age :{props.age}</h2>
    </>
)
}
function App() {
  const [counter, setCounter] = useState(0) // 0 is the default value of count
  
  useEffect(() => {
    alert("you have change the counter to "+counter);
  }, [counter]);
  return (

    <>
      <div className='App'>
        <Person
          name={'wwww'}
          ln={'Yune'}
        />
      </div>
      
      <div>
        <button onClick={()=> setCounter((prev)=>prev -1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={()=> setCounter((prev)=>prev +1)}>+</button>
      </div>
    </>

     

    
    
  );
}

export default App;
