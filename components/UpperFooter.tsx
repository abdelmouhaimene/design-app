import React from 'react'
import ActionButtons from './ActionButtons'
const UpperFooter = () => {
  return (
    <div className='flex flex-col items-end px-10'>
        <p className='font-work-sans font-bold text-5xl text-end'>
            We’re Continually Racing Against <br />
            The Clock So That You Can <br />
            Stay Ahead Of The Game.
        </p>
        <div className='mt-6 w-1/3'>
            <ActionButtons />
        </div>
    </div>
  )
}

export default UpperFooter