import { useState } from 'react'
import './App.css'
import AppTodo from './components/AppTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppTodo />
      <Todos />
    </>
  )
}

export default App
