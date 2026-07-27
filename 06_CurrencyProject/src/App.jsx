import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-slate-400 p-4">
          <h1 className='absolute z-20 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-gray-600 top-24 whitespace-nowrap'>Currency Convertor</h1>
        <div className="relative w-xl h-auto bg-slate-300 rounded-lg p-6 opacity-90 shadow-lg shadow-slate-800">
          <div className="w-full  bg-white p-2 rounded-lg mb-6">
            <div className="w-full flex justify-between items-center mb-1">
              <p className="text-slate-500">From</p>
              <p className='text-slate-500'>Currency Type</p>
            </div>
            <div className='w-full flex justify-between items-center b-4'>
              <input className='font-bold outline-none placeholder:text-black' type='number' defaultValue="0" min="0" />
              <p className='font-bold'>
                <select defaultValue="usd">
                  <option ></option>
                </select>
              </p>
            </div>
          </div>
          <button className='absolute rounded-md bg-blue-600 px-4 py-2 border-2 border-gray-300 left-1/2 top-[29%] -translate-x-1/2 translate-y-1/12 z-20'>swap</button>
          <div className="w-full  bg-white p-2 rounded-lg">
            <div className="w-full flex justify-between items-center mb-1">
              <p className="text-slate-500">To</p>
              <p className='text-slate-500'>Currency Type</p>
            </div>
            <div className='w-full flex justify-between items-center'>
            <input className='font-bold outline-none placeholder:text-black' type='number' defaultValue="0" min="0" />
              <p className='font-bold'>
                <select defaultValue="usd">
                  <option ></option>
                </select>
              </p>
            </div>
          </div>
        <button className='bg-blue-600 mt-6 p-2 rounded-md w-full'>Convert {} to {}</button>
        </div>
      </div>
    </>
  )
}

export default App
