import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';  // <FontAwesomeIcon className='' icon={fa} />
const Navbar = () => {
    return (
        <div>
            <h1 className='text-xl text-cyan-800' > navbar funcional? <FontAwesomeIcon className='text-5xl' icon={faAmbulance} /> </h1>
        </div>
    )
}

export default Navbar