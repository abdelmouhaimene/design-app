import React from 'react'

const ActionButtons = () => {
  return (
    <div className='flex-between gap-x-4'>
        <button className='action-button-bg'>
            Live chat
        </button>
        <button className='action-button'>
            Request a quote
        </button>
    </div>
  )
}

export default ActionButtons