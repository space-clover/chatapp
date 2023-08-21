"use client";
import React from 'react'
import Singin from './singin';
import Logout from './logout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { faBars, faBarsStaggered, faComment, faCommentAlt, faGear, faGears, faRightFromBracket, faUserAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Auth } from './firebase';
const Navuser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (user) => {
        setUser(user);
        console.log( "comprobacion de user desde nav:",user)
    });
    return () => {
        unsubscribe(); // Detener la escucha cuando el componente se desmonta
    };
    }, []);
    console.log(user);
    return (
        <nav className='flex flex-col justify-between py-8 items-center  w-15/100  h-screen bg-cyan-900 border-none  ' >
            <ul className='h-30/100 flex flex-col justify-between'>
                <FontAwesomeIcon  className=' w-6 text-2xl text-white  opacity-75 hover:opacity-100 transition duration-200 ' icon={faBars } /> 
                <FontAwesomeIcon  className=' w-6 text-2xl text-white  opacity-75 hover:opacity-100 transition duration-200 ' icon={faUserAlt } /> 
                <FontAwesomeIcon  className=' w-6 text-2xl text-white  opacity-75 hover:opacity-100 transition duration-200 ' icon={faGear } />
                <FontAwesomeIcon  className=' w-6 text-2xl text-white  opacity-75 hover:opacity-100 transition duration-200 ' icon={faComment } />  
                <FontAwesomeIcon  className=' w-6 text-2xl text-white  opacity-75 hover:opacity-100 transition duration-200 ' icon={faVideo } />
            </ul>
            <ul className='flex flex-col justify-center items-center'>
                {user ? <Logout/> : <Singin/>}
            </ul>
        </nav>
    )
    }

export default Navuser