import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { FaRegCopy, FaCheck } from "react-icons/fa";

function App() {
  const [length, setLength] = useState(10)
  const [numAllowed, setNumAllowed] = useState(false)
  const [symAllowed, setSymAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)
  const inputRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (symAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  }, [length, numAllowed, symAllowed, setPassword])

  const copyText = async () => {
    await navigator.clipboard.writeText(inputRef.current.value);
    setCopied(true)
    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000);
  };

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, symAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto mt-10 p-4 bg-gray-700 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white mb-4">Password Generator</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            value={password}
            ref={inputRef}
            readOnly
            placeholder='Password'
            className="w-full p-2 rounded bg-blue-400 outline-none text-white text-lg overflow-hidden"
          />
          <button className="flex text-white bg-blue-400 focus:outline-none rounded text-lg px-2 items-center gap-1" onClick={copyText}>

            {copied ? <FaCheck className='font-bold text-lg' /> : <FaRegCopy className='font-bold text-lg' />}
            Copy
          </button>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2 rounded border border-gray-300"
          />
          <label className="ml-2 text-orange-400">Length:{length}</label>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => setNumAllowed(prev => !prev)}
            className="ml-4"
          />
          <label className="ml-2">Numbers</label>
          <input
            type="checkbox"
            defaultChecked={symAllowed}
            onChange={() => setSymAllowed(prev => !prev)}
            className="ml-4"
          />
          <label className="ml-2">Symbols</label>
        </div>
      </div>
    </>
  )
}

export default App


// useCallback() is a React hook that stores (memorizes) a function so that React doesn't create a new copy of it on every render. A new function is created only when one of its dependencies changes. This helps improve performance, especially when passing functions to child components.

// useCallback() is a React hook used to memoize a function, preventing unnecessary function recreation unless its dependencies change.

/* Real-life Example
      Imagine your college ID card.
      Every day you enter college.
      Without useCallback, the college prints you a new ID card every morning.
      With useCallback, you keep using the same ID card until your details (name, course, etc.) change.
      The ID card = cached function. */


// useEffect() is a React hook that lets you run code after a component has been rendered. It is used for tasks that should happen after the UI is updated, such as fetching data from an API, updating the page title, starting a timer, or adding event listeners. You can also control when the code runs by providing a dependency array.

// useEffect() is a React hook used to perform side effects after a component renders. The dependency array controls when the effect is executed.

/* Real-life Example
      Imagine you have a room with automatic lights.
      You enter the room → Lights turn on.
      You leave the room → Lights turn off.

      Here:
      Entering the room = Component renders.
      Turning on the lights = useEffect runs.
      Turning off the lights = Cleanup function. */

// useRef() is a React hook that lets you store a value or reference that persists between renders without causing the component to re-render when it changes. It is commonly used to access DOM elements or keep track of values that don't need to update the UI.

// useRef() is a React hook used to store mutable values or access DOM elements without triggering re-renders.