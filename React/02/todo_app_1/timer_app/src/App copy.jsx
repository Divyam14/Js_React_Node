import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)


  // Doing it this way causes issues. App() function is run every time a rerender happens
  // At each render a new setInterval is setup so the count variable updates haphazardly

  // setInterval(function () {
  //   setCount(count + 1)
  // }, 1000)


  //TO solve this we use useEffect hook 

  useEffect(function () {
    setInterval(function () {

      // using count + 1 -> The interval callback captures the value of count from that render, which is 0, and keeps that forever.
      // On every tick, setCount(count + 1) becomes setCount(0 + 1), so React keeps setting the state to 1.
      // Therefore we need to Use functional update to avoid stale `count` value inside setInterval
      setCount(count => count + 1)
    }, 1000)
  }, [])

  // Need to disable strict mode else (clock doesnt work as expected)



  return (
    <>
      <h1>Timer : {count}</h1>
    </>
  )
}

export default App
