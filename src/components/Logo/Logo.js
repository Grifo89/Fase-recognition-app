import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css'

const Logo = () => {
  return (
    <div className='Center mt0 mb2'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 70 }} style={{ height: 172, width: 150 }} >
        <div className="Tilt-inner pa2">
          <img style={{}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  )
}

export default Logo;
