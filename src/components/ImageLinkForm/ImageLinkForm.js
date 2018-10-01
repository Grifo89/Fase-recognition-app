import React from 'react';
import './ImageLinkForm.css'

const Navigation = ({onInputChange, onPictureSubmit}) => {
  return (
    <div>
      <p className='f3'>
        {'Este cerebro detecta caras en tus imagenes! 🚀🚀🚀🚀'}
      </p>
      <div className='Center'>
        <div className='Center Form pa4 br3 shadow-5'>
          <input id='submit' className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
          <button  className='w-30 grow 4 link ph3 pv2 dib white bg-light-purple' onClick={onPictureSubmit}>Detected</button>
        </div>
      </div>
    </div>
  )
}

export default Navigation;
