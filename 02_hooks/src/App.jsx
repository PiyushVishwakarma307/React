import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const updateValue = () => {
    setCounter(counter + 1)
  }

  const resetValue = () => {
    setCounter(0)
  }

  return (
    <>
      <h1>Click Counter</h1><br/>
      <p style={{ border: "1px solid gray", width: "50px" }}>{counter}</p><br/>
      <button onClick={updateValue} style={{ width: "150px" }}>Click Me</button><br/>
      <button onClick={resetValue} style={{ width: "150px" }}>Reset</button>
    </>
  )
}

export default App

// what is a state: State is a built-in object that stores property values that belong to a component. When the state object changes, the component re-renders. In React, state is used to manage data that can change over time and affect the rendering of the component. It allows components to be dynamic and interactive, as they can respond to user input or other events by updating their state and re-rendering accordingly.`

// what is the lifecycle of react component: The lifecycle of a React component refers to the series of methods that are called at different stages of a component's existence. These stages include mounting (when the component is created and inserted into the DOM), updating (when the component's state or props change), and unmounting (when the component is removed from the DOM). React provides lifecycle methods that allow developers to perform actions at specific points in a component's lifecycle, such as fetching data, setting up subscriptions, or cleaning up resources. With the introduction of hooks, functional components can also manage lifecycle events using useEffect and other hooks.

// what is hook: Hooks are functions that let you "hook into" React state and lifecycle features from function components. They allow you to use state and other React features without writing a class component. Hooks were introduced in React 16.8 and have become a fundamental part of building React applications.

// what is useState hook: The useState hook is a built-in React hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that value. You can use the useState hook to manage local state in your components, enabling them to be dynamic and interactive. When the state is updated using the provided function, the component re-renders to reflect the new state.
