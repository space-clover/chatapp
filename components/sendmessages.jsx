import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrinWide, faFaceGrinWink, faImage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const Sendmessages = () => {
    return (
    <form>
        <label htmlFor="chat" className="sr-only">Your message</label>
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-200">
            <button type="button"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                <FontAwesomeIcon  className=' w-6 text-2xl text-gray-800' icon={faImage} /> 
                <span className="sr-only">Upload image</span>
            </button>
            <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                <FontAwesomeIcon  className=' w-6 text-2xl text-gray-800' icon={faFaceGrinWide} /> 
                <span className="sr-only">Add emoji</span>
            </button>
            <textarea id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message..."></textarea>
            <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100">
            <FontAwesomeIcon  className=' w-6 text-2xl text-gray-800' icon={faPaperPlane} /> 
                <span className="sr-only">Send message</span>
            </button>
        </div>
    </form>
    )
}

export default Sendmessages