import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
   const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

// children: whenever we want to wrap a component with a provider, we can use children to pass the component as a child of the provider. This way, we can access the context value in the child component without prop drilling.

// prop driling: passing props down through multiple levels of components.