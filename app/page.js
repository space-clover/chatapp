import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons'; 
import Navbar from '../components/Navbar';
export default function Home() {
  return ( // <FontAwesomeIcon className='' icon={fa} />
    <main className="flex flex-col items-center justify-between p-24">
        
        <section className='w-full' >
            <Navbar />
        </section>
        
    </main>
  )
}
