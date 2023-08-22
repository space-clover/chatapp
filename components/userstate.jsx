"use client";
import React, { useEffect, useState } from 'react'
import Navuser from './Navuser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { Auth } from './firebase';


const Userstate = () => {


    return (
        <div className='w-full flex '>
            <Navuser/>
            <div className=' w-85/100 h-screen  '>
            <section className='flex flex-col items-center pt-8'>
                <FontAwesomeIcon className='w-25/100 text-9xl text-cyan-800 rounded-3xl ' icon={faUserDoctor} />
                <p className='text-sm text-gray-500 '>@geranioGnostico</p>
            </section>
            <section className='flex flex-col items-center pt-8' >
                <p className='text-xl text-gray-800 font-bold'>Chats</p>
            </section>
        </div>
        </div>
    )
}

export default Userstate