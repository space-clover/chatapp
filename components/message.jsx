import React from 'react'

const Message = ({message}) => {
    
  return (
    <div>
        <div className="flex items-center w-full max-w-md p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow">
                <img className='w-1/12 my-2' src="" alt="" />
            <div className="pl-4 text-sm font-normal">{message.text}</div>
        </div>
    </div>
  )
}

export default Message