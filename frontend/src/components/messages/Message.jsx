import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src='https://images.unsplash.com/photo-1494790108377-be9c' alt='img' />
            </div>
        </div>
        <div className={'chat-bubble text-white bg-blue-500'}>Hi! Whats up??</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-300">Seen at 12:46</div>
    </div>
    
  )
}

export default Message
