"use client";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Auth } from './firebase';

const Logout = () => {
  const signOut = () =>{
    Auth.signOut();
  }

  return (
    <div>
         <FontAwesomeIcon onClick={signOut}  className=' cursor-pointer text-2xl opacity-75 hover:opacity-100 transition duration-200 ' icon={faRightFromBracket } /> 
    </div>
  )
}

export default Logout;
