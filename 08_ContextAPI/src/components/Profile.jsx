import React from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = React.useContext(UserContext)
  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user?.username}</p>
    </div>
  )
}

export default Profile
