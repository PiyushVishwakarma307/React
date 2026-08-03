import { useState } from 'react'
import { Header, Home, Footer } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    </>
  )
}

export default App

// React Router is the core routing library that matches URLs to React components.

// React Router DOM adds browser-specific functionality (history integration, BrowserRouter, Link, NavLink, etc.) for web applications.

// BrowserRouter watches URL changes, Routes finds the best matching Route, and React renders the associated component.

// Link and NavLink enable client-side navigation without reloading the page.
// Outlet is the key to building nested layouts and nested routes.

// Hooks like useNavigate, useParams, useLocation, and useSearchParams let your components interact with the routing system.

// Modern React Router also includes powerful data APIs (loader, action, useLoaderData, useNavigation, etc.) that combine routing with data fetching and form handling.