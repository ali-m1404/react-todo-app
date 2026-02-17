import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoList from './Component/TodoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoList/>
     <h1 className='text-4xl text-sky-200'>hello viteTailwind </h1>
    </>
  )
}

export default App
