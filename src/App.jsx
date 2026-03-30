import './App.css'
import { useState } from 'react';
 
function App() {
 
  const [count, setCount] = useState(0);
 
  
  function increment() {
    setCount(count + 1); 
  }
 
  function decrement() {
    setCount(count - 1);    
  }
 
  function reset() {
    setCount(0);         
  }
 

  return (
    <div >
      <h2 > Count: {count}</h2>
      <button  onClick={increment}>+ Add</button>
      <button onClick={decrement}>- Subtract</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
 export default App