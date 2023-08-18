import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons'; 
import Navbar from '../components/Navbar';
import Userstate from '../components/userstate';
import { Auth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Home() {
  const[user] = useAuthState(auth)
  console.log(user)
  return ( // <FontAwesomeIcon className='' icon={fa} />
    <main className="flex  items-center justify-between   ">
        <section className='w-32/100 h-screen bg-cyan-800 bg-opacity-5'>
            <Userstate/>
        </section>
        <section className='w-2/3 h-screen ' >
            <Navbar/>
        </section>
        
    </main>
  )
}
