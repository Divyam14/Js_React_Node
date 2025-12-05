import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [todos, setTodos] = useState([{
    title: "Goto gym",
    description: "Go to gym regularly",
    completed: false
  }])


  // document.getElementById("title").value ->this is not proper way to do in react (it is more optimal) but we dont direct change document object in react
  function addTodo() {
    setTodos([...todos, {
      title: document.getElementById("title").value,
      description: document.getElementById("desc").value,
      completed: false
    }])
  }

  return <div>
    <input type='text' placeholder='Title' id="title" />
    <input type='text' placeholder='Description' id="desc" />

    <button onClick={addTodo}>Add todo</button>
    <br /><br />
    {/* <Todo
      title={todos[0].title}
      description={todos[0].description}
      completed={todos[0].completed}
    /> */}

    {
      todos.map((todo) => {
        return <Todo
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
        />
      })
    }
  </div>

  function Todo(props) {
    return <div>
      <h3>{props.title}</h3>
      <h4>{props.description}</h4>
      <h4>{props.completed ? "Task Done" : "Tast not done"}</h4>
    </div>
  }

}




export default App
