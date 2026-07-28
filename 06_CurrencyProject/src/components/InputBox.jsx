import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  selectCurrency,
  onAmountChange,
  onCurrencyChange,
  amountDisable = false,
  currencyOptions = [],

  className = "",
}) {
  const id = useId();
  return (
    <>
      <div className='w-full bg-white p-2 rounded-lg mb-6 flex'>
        <div className='w-1/2'>
          <label htmlFor={`${id}-amountInput`} className='mb-2 text-black/40'>
            {label}
          </label>
          <input 
          id={`${id}-amountInput`}
          className='font-bold outline-none placeholder:text-black' type='number' placeholder="Amount" min="0" value={amount} disabled={Boolean(amountDisable)}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          >
          </input>
        </div>
        <div className='w-1/2 flex flex-col flex-wrap items-end'>
          <p className="text-black/40 mb-2">Currency Type</p>
          <select 
          className='rounded-lg px-1 outline-none bg-gray-300 w-fit'
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default InputBox


// // useId(): useId() is a React hook that generates a unique, stable ID for a component. It is primarily used to connect related HTML elements (such as a label and an input) and improve accessibility by ensuring IDs remain unique, even when the same component is rendered multiple times.

/* Real-life example:
Imagine a hospital where every patient receives a unique patient ID. Even if two patients have the same name, their IDs are different, so doctors can always identify the correct patient. Similarly, useId() gives each component instance its own unique ID so related elements like labels and inputs are correctly linked without conflicts.
*/