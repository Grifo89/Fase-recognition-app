import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className='center ma'>
      <div className='mt2' style={{position: 'relative'}}>
        <img id='inputimage' alt='imag' src={imageUrl} width='500px' height='auto'/>
        <div className='boundingbox' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol, height: 'auto'}}></div>
      </div>
    </div>
  )
}

export default FaceRecognition;
