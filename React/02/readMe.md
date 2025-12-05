# React Learning Projects - 02

This directory contains beginner-friendly React projects to help you understand core React concepts including state management, effects, and component lifecycle.

---

## 📁 Projects Overview

### 1. **counter_app** - Basic State Management

**Key Concepts:**
- `useState` hook for managing component state
- Event handlers (`onClick`)
- State updates trigger re-renders

**What it does:**
- Simple counter that can be incremented or decremented
- Displays the current count value

**Learning Points:**
```jsx
const [count, setCount] = useState(0)
```
- `useState(0)` initializes state with value 0
- `setCount` is the function to update state
- Each state update causes the component to re-render

**Important Notes:**
- Clicking buttons triggers state updates
- React automatically re-renders when state changes
- Each state variable is independent

---

### 2. **react_practice_basic** - useEffect & Lifecycle

**Key Concepts:**
- `useEffect` hook for side effects
- Component lifecycle (mount, update, unmount)
- Cleanup functions
- Dependency arrays
- Functional state updates (`prev => prev + 1`)

**What it does:**
- Counter that logs lifecycle events to the console
- Demonstrates when effects run and cleanup

**Learning Points:**

**Effect with Empty Dependency Array:**
```jsx
useEffect(() => {
  console.log("Counter mounted")
  
  return () => {
    console.log("Counter unmounted")
  }
}, []) // Runs only once on mount/unmount
```

**Effect with Dependencies:**
```jsx
useEffect(() => {
  console.log("Count changed:", count)
  
  return () => {
    console.log("Cleanup before count changes again")
  }
}, [count]) // Runs on mount + whenever count changes
```

**Functional State Updates:**
```jsx
setCount(prev => prev + 1) // Always use this when updating based on previous value
```

**Important Notes:**
- Empty `[]` = effect runs once (on mount), cleanup runs on unmount
- `[count]` = effect runs on mount + whenever `count` changes
- Cleanup function runs before the next effect AND on unmount
- Use functional updates when new state depends on old state

---

### 3. **timer_app** - Timers & Cleanup

**Key Concepts:**
- `setInterval` for continuous updates
- Cleanup with `clearInterval`
- Conditional rendering
- Component mounting/unmounting lifecycle

**What it does:**
- Timer that increments every second
- Counter toggles visibility every 5 seconds (mounts/unmounts)
- Demonstrates proper cleanup of intervals

**Learning Points:**

**Setting up a Timer:**
```jsx
useEffect(function () {
  let clock = setInterval(function () {
    setCount(count => count + 1)
  }, 1000)
  
  // Cleanup logic (unmounting)
  return function () {
    clearInterval(clock)
  }
}, [])
```

**Conditional Rendering:**
```jsx
{counterVisible ? <Counter /> : null}
```

**Important Notes:**
- **MUST clear intervals in cleanup** to prevent memory leaks
- Use functional state updates (`count => count + 1`) in intervals
- Strict mode in development runs effects twice - disable if timer behaves unexpectedly
- Empty dependency array `[]` ensures interval is set up only once

**Component Lifecycle Phases:**
1. **Mounting** - Component is created and added to DOM
2. **Re-rendering** - State/props change, component updates
3. **Unmounting** - Component is removed from DOM (cleanup runs here)

---

### 4. **todo_app** - Lists & Rendering Arrays

**Key Concepts:**
- Managing arrays in state
- Mapping over arrays to render multiple components
- Spread operator (`...`) for arrays
- Props passing to child components
- Component composition

**What it does:**
- Add todos with title and description
- Display list of todos
- Show completion status for each todo

**Learning Points:**

**Array State Management:**
```jsx
const [todos, setTodos] = useState([{
  title: "Goto gym",
  description: "Go to gym regularly",
  completed: false
}])
```

**Adding to Array State:**
```jsx
function addTodo() {
  setTodos([...todos, {
    title: document.getElementById("title").value,
    description: document.getElementById("desc").value,
    completed: false
  }])
}
```

**Mapping Over Arrays:**
```jsx
{
  todos.map((todo) => {
    return <Todo
      title={todo.title}
      description={todo.description}
      completed={todo.completed}
    />
  })
}
```

**Component with Props:**
```jsx
function Todo(props) {
  return <div>
    <h3>{props.title}</h3>
    <h4>{props.description}</h4>
    <h4>{props.completed ? "Task Done" : "Task not done"}</h4>
  </div>
}
```

**Important Notes:**
- ⚠️ **Not the React way:** Using `document.getElementById()` - better to use controlled components with `onChange`
- Spread operator `...todos` creates a new array (React needs new references to detect changes)
- Each mapped component should have a unique `key` prop (not shown but important)
- Conditional rendering with ternary: `{condition ? "Yes" : "No"}`

**Better Approach (Future Learning):**
```jsx
// Use controlled inputs instead
const [title, setTitle] = useState("")
<input value={title} onChange={(e) => setTitle(e.target.value)} />
```

---

## 🎯 Key React Concepts Covered

### 1. **State Management**
- `useState` for local component state
- State triggers re-renders
- Never mutate state directly - always use setter function

### 2. **Effects & Side Effects**
- `useEffect` for side effects (timers, API calls, subscriptions)
- Dependency arrays control when effects run
- Cleanup functions prevent memory leaks

### 3. **Component Lifecycle**
- **Mount:** Component appears on screen
- **Update:** State/props change
- **Unmount:** Component is removed

### 4. **Event Handling**
- Use `onClick`, `onChange`, etc.
- Pass functions (not function calls) to event handlers

### 5. **Rendering Lists**
- Use `.map()` to render arrays of components
- Each item should have a unique `key` prop

### 6. **Conditional Rendering**
- Use ternary operator: `{condition ? <A /> : <B />}`
- Use logical AND: `{condition && <Component />}`

---

## 🚀 Running the Projects

Each project is a Vite-based React app. To run any of them:

```bash
# Navigate to the project directory
cd counter_app  # or react_practice_basic, timer_app, todo_app

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

Then open the URL shown in terminal (usually `http://localhost:5173`)

---

## 📝 Learning Path Progression

1. **Start with counter_app** → Understand useState basics
2. **Move to react_practice_basic** → Learn useEffect and lifecycle
3. **Try timer_app** → Practice cleanup and intervals
4. **Build todo_app** → Work with arrays and lists

---

## 🔍 Common Mistakes to Avoid

1. ❌ Mutating state directly: `count++` or `todos.push()`
   ✅ Use setter: `setCount(count + 1)` or `setTodos([...todos, newTodo])`

2. ❌ Forgetting cleanup in effects with intervals/listeners
   ✅ Always return cleanup function

3. ❌ Using `document.getElementById` in React
   ✅ Use controlled components with state

4. ❌ Forgetting dependency arrays in useEffect
   ✅ Always specify dependencies (or empty array)

5. ❌ Not using functional updates when state depends on previous state
   ✅ Use: `setState(prev => prev + 1)`

---

## 🎓 Next Steps

After mastering these projects, explore:
- Custom hooks
- Context API for global state
- React Router for navigation
- Form handling with controlled components
- API calls with useEffect
- State management libraries (Recoil, Redux)

---

Happy Learning! 🚀
