"use client";
import React, { useEffect } from 'react';
import { Auth } from './firebase';
import { GoogleAuthProvider, getRedirectResult, signInWithRedirect, onAuthStateChanged } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const GooglSingIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(Auth, provider);
};

const Singin = () => {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (user) => {
            if (user) {
                unsubscribe(); 
            } else {
        GooglSingIn();
    }
});

    return () => {
        unsubscribe(); 
    };
}, []);

    return (
        <div>
            {<FontAwesomeIcon  className=' absolute top-1/2 left-1/2  w-4   text-black  fa-spin-pulse' icon={faSpinner} /> }
        </div>
    );
};

export default Singin;
