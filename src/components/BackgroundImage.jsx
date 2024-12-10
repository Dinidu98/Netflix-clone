import React from 'react'
import background from '../assets/login.jpg'

const BackgroundImage = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <img
        src={background}
        alt="BackgroundImg"
        style={{ height: '100vh', width: '100vw' }}
      />
    </div>
    
  )
}

export default BackgroundImage
