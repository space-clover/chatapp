import React from 'react'
import { Auth } from './firebase'

const style = {
  received: "bg-cyan-700  bg-opacity-5 float-left mt-1",
  sent: "float-right bg-white shadow ",
  nulo: "hidden"
};

const Message = ({ message }) => {
  const messageClass =
  message.uid === (Auth.currentUser ? Auth.currentUser.uid : null)
    ? `${style.sent}`
    : `${style.received}`;

if (!Auth.currentUser && message.uid === null) {
  ("Para continuar funcionando, debes iniciar sesión con Google :)");
}
  return (
    <div>
      <div className={`${messageClass} lg:flex items-center w-75/100 max-w-md p-4 space-x-4 text-gray-500 divide-x divide-gray-200 rounded-lg `}>
        <p className="pl-4 lg:text-sm text-xs font-normal">{message.name}</p>
        <div className="pl-4 text-sm font-normal">{message.text}</div>
      </div>
    </div>
  );
};

export default Message;
