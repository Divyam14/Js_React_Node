import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount(count + 1)
  }

  function decreaseCount() {
    setCount(count - 1)
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increaseCount}>Increase count</button>
      <button onClick={decreaseCount}>Descrease count</button>
    </>
  )
}

export default App
