import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import World from './World.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <World />
  </StrictMode>,
)

createRoot(document.getElementById('world')).render(
  <StrictMode>
    <World />
  </StrictMode>
)
