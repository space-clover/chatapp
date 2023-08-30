import React from 'react'
import { Auth } from './firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBell,  faEllipsis, faSearch, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';  // <FontAwesomeIcon className='' icon={fa} />
const Navbar = () => {
    return (
        <nav className='p-2 flex w-full '>
            <div className='flex  w-10/100 items-center justify-around mx-4'>
                <p className='text-gray-400 text-xl'> Liza </p>
                <FontAwesomeIcon  className=' w-6 text-3xl text-blue-400' icon={faUserAstronaut} />            
            </div>
            <form className=' w-59/100'>   
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FontAwesomeIcon className='text-gray-400 text-opacity-50 w-6/100' icon={faSearch} />
                    </div>
                    <input  autoComplete='off' type="search" className="block w-full p-4 pl-10 text-sm text-gray-900   rounded-l-xl bg-gray-50 outline-none " placeholder="Search" required />
                </div>
            </form>
            <button  className=" flex justify-center items-center  w-10/100   bg-cyan-700 bg-opacity-10 rounded-r-xl  focus:outline-none px-4 py-2 z-0 ">
                    <FontAwesomeIcon className='text-xl text-cyan-800 w-6 z-10 ' icon={faEllipsis}  />
            </button>
            <div className='mx-2 flex items-center justify-center rounded-lg w-12/100 bg-cyan-700 bg-opacity-10 '>
                    <FontAwesomeIcon className='text-cyan-800 text-xl  cursor-pointer  w-5 z-10 hover:text-yellow-500 transition duration-200'   icon={faBell} />
            </div>
        </nav>
    )
}

export default Navbar