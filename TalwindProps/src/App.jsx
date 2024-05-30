import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj={ 
    username:"shubham",
    age:"20"
  }
  return (
    <>
      <h1 className='bg-green-400 text-black ' >Tailwind test</h1>
       <Card username="hey" btntext="click me"/>
       <Card username="shubham"btntext="visit me"/>
         
    </>
  )
}

export default App
