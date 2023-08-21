import React from 'react'
import { Auth } from './firebase'

const style = {
  received: "bg-cyan-700  bg-opacity-5 float-left mt-1",
  sent: "float-right bg-white shadow ",
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === Auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;
      
  return (
    <div>
      <div className={`${messageClass} flex items-center w-full max-w-md p-4 space-x-4 text-gray-500 divide-x divide-gray-200 rounded-lg `}>
        <p className="pl-4 text-sm font-normal">{message.name}</p>
        <div className="pl-4 text-sm font-normal">{message.text}</div>
      </div>
    </div>
  );
};

export default Message;
