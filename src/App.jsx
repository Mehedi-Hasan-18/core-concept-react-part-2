import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'


function App() {
  function handleClick(){
    alert("Button clicked")
  } 

  function vajailla(num){
    alert(num+5);
  }

  return (
    <>
      <h1>Core concept Part 2</h1>
      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>vajailla(3)}>Vajailla</button>
    </>
  )
}

export default App
