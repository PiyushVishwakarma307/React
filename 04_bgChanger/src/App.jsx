import { useState } from 'react'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <>
      <div className='w-full h-screen flex justify-center' style={{backgroundColor:color}}>
        <h1 className='text-4xl font-bold text-white mt-20'>Background Color Changer</h1>
        <div className='fixed bg-amber-50 rounded-3xl bottom-4 flex flex-wrap p-2 gap-4 '>
          <button className='rounded-full bg-red-500 flex justify-center items-center outline-none w-12 p-1 text-white font-bold text-xl px-12' onClick={() => setColor("red")}>
            red
          </button>
          <button className='rounded-full bg-green-500 flex justify-center items-center outline-none w-12 p-1 text-white font-bold text-xl px-12 ' onClick={() => setColor("green")}>
            green
          </button>
          <button className='rounded-full bg-blue-500 flex justify-center items-center outline-none w-12 p-1 text-white font-bold text-xl px-12' onClick={() => setColor("blue")}>
            blue
          </button>
          <button className='rounded-full bg-yellow-500 flex justify-center items-center outline-none w-12 p-1 text-white font-bold text-xl px-12' onClick={() => setColor("yellow")}>
            yellow
          </button>
          <button className='rounded-full bg-black flex justify-center items-center outline-none w-12 p-1 text-white font-bold text-xl px-12' onClick={() => setColor("black")}>
            black
          </button>
          <button className='rounded-full bg-pink-500 flex justify-center items-center outline-none w-12 p-1 text-white font-bold text-xl px-12' onClick={() => setColor("pink")}>
            pink
          </button>
          <button className='rounded-full bg-purple-500 flex justify-center items-center outline-none w-12 p-1 text-white font-bold text-xl px-12' onClick={() => setColor("purple")}>
            purple
          </button>
          <button className='rounded-full bg-orange-500 flex justify-center items-center outline-none w-12 p-1 text-white font-bold text-xl px-12' onClick={() => setColor("orange")}>
            orange
          </button>
        </div>
      </div>
    </>
  )
}

export default App
