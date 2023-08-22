"use client";
import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { Auth } from './firebase';



const Userperfil  = () => {
    const [displayName, setDisplayName] = useState('');

    useEffect(() => {
        if (Auth.currentUser) {
          // Si el usuario ya tiene un displayName, muestre ese valor
          if (Auth.currentUser.displayName) {
            setDisplayName(Auth.currentUser.displayName);
          } else {
            // Si el displayName aún no está disponible, actualícelo cuando esté listo
            const unsubscribe = Auth.onAuthStateChanged((user) => {
              if (user && user.displayName) {
                setDisplayName(user.displayName);
              }
            });
    
            return () => {
              unsubscribe(); // Detener la escucha cuando el componente se desmonta
            };
          }
        }
      }, []);
    

    return (
        <div className=' w-85/100 h-screen  '>
            <section className='flex flex-col items-center pt-8'>
                <FontAwesomeIcon className='w-25/100 text-9xl text-cyan-800 rounded-3xl ' icon={faUserDoctor} />
                <p className='text-lg text-black font-bold'>{displayName}</p>
                <p className='text-sm text-gray-500 '>@geranioGnostico</p>
            </section>
            <section className='flex flex-col items-center pt-8' >
                <p className='text-xl text-gray-800 font-bold'>Chats</p>
            </section>
        </div>
)
}

export default  Userperfil;