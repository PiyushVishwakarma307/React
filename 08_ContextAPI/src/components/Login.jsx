import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile.jsx'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { user, setUser } = useContext(UserContext)

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        setUser({username, password})
        navigate('/profile')
    }

  return (
    <div>
      <h2>Login Page</h2>
      <input 
        type="text" 
        placeholder='username' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      <input 
        type="password" 
        placeholder='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
