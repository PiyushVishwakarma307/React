import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Contact, Github, User } from './components/index.js';
import Layout from './Layout.jsx';
import { createRoutesFromElements, Route } from "react-router-dom";
import { githubInfoLoader } from './components/Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       }, 
//       {
//         path: "/about",
//         element: <About />
//       }, 
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/github",
//         element: <Github />
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="user/:userId" element={<User />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


// Layout: Layout component is a wrapper for the main content of the application. It includes the Header and Footer components, and uses the Outlet component to render the child routes defined in the router configuration.

// RouterProvider: RouterProvider is a component that provides the routing context to the application. It takes the router configuration created by createBrowserRouter and makes it available to the rest of the application.

// createBrowserRouter: createBrowserRouter is a function that creates a router configuration for the application. It takes an array of route objects, each defining a path and the component to render for that path. The router configuration is then passed to the RouterProvider component to enable routing in the application.

// loader: The loader function is used to fetch data before rendering a route. In this case, the githubInfoLoader function fetches data from the GitHub API and returns it as JSON. The useLoaderData hook is then used in the Github component to access this data and render it.