import React from 'react'
import './ProfileScreen.css'
import Nav from '../nav/Nav'

export const ProfileScreen = () => {
  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
      </div>
    </div>
  )
}

export default ProfileScreen
