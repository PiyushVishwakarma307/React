import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserDetail from './components/UserDetail.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500 mb-4">
        User Report
      </h1>
      <div className="flex items-center justify-center gap-2">
        <UserDetail name="John Doe" email="john.doe@example.com" location="New York, USA" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <UserDetail name="Jane Smith" email="jane.smith@example.com" location="Los Angeles, USA" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      </div>

    </>
  )
}

export default App
