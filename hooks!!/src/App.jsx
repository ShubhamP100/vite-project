import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Hooks summary
// ->  hooks are used for the updation of values in code
function App() {
  // const [count, setCount] = useState(0)
  
  let [Counter,setCounter] = useState(10)
 
  // let Counter=10; 
   
  const addvalue=()=>{
     //console.log("clicked  ",Counter);
    //Counter=Counter+1;
    setCounter(Counter +1);
    //console.log("clicked  ",Counter);
 
  }
  const removevalue=()=>{
    setCounter(Counter -1);
   }
  return (
    <>
      <h1>tum or me</h1>
      <h2>Counter value:{Counter}</h2>

      <button onClick={addvalue}>Add value {Counter}</button>
      <br />
      <button onClick={removevalue}>remove value {Counter}</button>
      <p>footer:{Counter}</p>
    </>
  )
}

export default App
