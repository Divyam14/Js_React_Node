import { useEffect, useState } from 'react'
import './App.css'


// Demonstrates how useEffect behaves during mount, update, and unmount phases
function App() {
  const [count, setCount] = useState(0)

  function increaseCount() {
    // Always use the functional form when updating based on the previous value
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <Counter count={count} />
      <button onClick={increaseCount}>Increase count</button>
      <br />
      After counter
    </div>
  )
}


// Counter component: logs lifecycle-like behavior using different effects
function Counter({ count }) {

  // -----------------------------
  // Effect 1: Mount and Unmount
  // -----------------------------
  useEffect(() => {
    console.log("Counter mounted")

    // Cleanup function is called when the component unmounts
    return () => {
      console.log("Counter unmounted")
    }
  }, []) // Empty dependency array = runs only once on mount/unmount


  // -----------------------------
  // Effect 2: Responding to prop changes
  // -----------------------------
  useEffect(() => {
    console.log("Count changed:", count)

    // (Optional) Cleanup before next effect run or unmount
    return () => {
      console.log("Cleanup before count changes again")
    }
  }, [count])
  /*
   * React runs this effect:
   * - On the first render (after mount)
   * - Every time `count` changes afterward
   * 
   * Before re-running this effect (due to dependency change),
   * React calls the cleanup from the previous run.
   */


  // -----------------------------
  // Rendering UI
  // -----------------------------
  return <div>Counter {count}</div>
}

export default App
