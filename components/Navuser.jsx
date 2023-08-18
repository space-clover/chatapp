import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered, faComment, faCommentAlt, faGear, faGears, faRightFromBracket, faUserAlt } from '@fortawesome/free-solid-svg-icons';
const Navuser = () => {
    return (
        <nav className='flex flex-col justify-between py-8 items-center  w-15/100  h-screen bg-cyan-900 border-none  opacity-70' >
            <ul className='h-30/100 flex flex-col justify-between'>
                <FontAwesomeIcon  className=' w-6 text-white  opacity-75 hover:opacity-100 transition duration-200 ' icon={faBars } /> 
                <FontAwesomeIcon  className=' w-6 text-white  opacity-75 hover:opacity-100 transition duration-200 ' icon={faUserAlt } /> 
                <FontAwesomeIcon  className=' w-6 text-white  opacity-75 hover:opacity-100 transition duration-200 ' icon={faGear } />
                <FontAwesomeIcon  className=' w-6 text-white  opacity-75 hover:opacity-100 transition duration-200 ' icon={faComment } />  
            </ul>
            <FontAwesomeIcon  className=' w-6 text-white  opacity-75 hover:opacity-100 transition duration-200 ' icon={faRightFromBracket } /> 
        </nav>
    )
    }

export default Navuser