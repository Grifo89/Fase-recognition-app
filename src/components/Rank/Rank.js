import React from 'react';

const Rank = ({name, entries}) => {
  return (
    <div>
      <div className='white f2'>
        {`${name}, Tu conteo actual es de... 🦖🦖🦖🦖`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  )
}

export default Rank;
