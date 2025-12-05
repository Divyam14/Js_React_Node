import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {


  // Need to disable strict mode else (clock doesnt work as expected)

  //Conditionally rerendering Counter
  const [counterVisible, setCounterVisible] = useState(true)

  useEffect(function () {
    setInterval(function () {
      setCounterVisible(visible => !visible)
    }, 5000)
  }, [])



  return (
    <>
      {counterVisible ? <Counter /> : null}
    </>
  )

  // Component lifecycle -> mounting , re-rendering , unmounting
  function Counter() {
    const [count, setCount] = useState(0)

    useEffect(function () {
      let clock = setInterval(function () {

        setCount(count => count + 1)
      }, 1000)

      //cleanup logic (unmounting)
      return function () {
        clearInterval(clock)
      }
    }, [])

    /*
      useEffect(function,[])
      [] -> second argument is dependency array 
     */


    return <div>
      <h1>Timer : {count}</h1>
    </div>
  }
}

export default App
