import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="app-container">
      <h1>Welcome to My App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>


    </div>
  )
}
export default App
