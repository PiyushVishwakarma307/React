import { useState } from 'react'
import { InputBox } from './components' 
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './index.css'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-slate-400 p-4">
          <h1 className='absolute z-20 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-gray-600 top-24 whitespace-nowrap'>Currency Convertor</h1>
        <div className="relative w-xl h-auto bg-slate-300 rounded-lg p-6 opacity-90 shadow-lg shadow-slate-800">
          <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <InputBox 
            label="From"
            amount={amount}
            currencyOptions={options}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            />


          <button type='button' className='absolute rounded-md bg-blue-600 px-4 py-2 border-2 border-gray-300 left-1/2 top-[27%] -translate-x-1/2 translate-y-1/12 z-20' onClick={swap}>swap</button>
          
        <InputBox 
            label="to"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable="true"
            />
        <button type='submit' className='bg-blue-600 mt-4 p-3 rounded-md w-full'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default App
