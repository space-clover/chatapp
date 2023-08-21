"use client";
import React, {useState, useEffect, useRef} from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Message from './message'
import {db} from "../components/firebase"


const Chat = () => {
        const [messages, setMessages] = useState([]);
        const scroll = useRef(); 

        useEffect(() => {  
        const q = query(collection(db,"messages"), orderBy("timestamp")); 
        const unsubscribe = onSnapshot (q, (querySnapshot) =>{
            let messages = [];
            querySnapshot.forEach((doc) => {
            messages.push ({...doc.data(), id: doc.id});
            })
            setMessages(messages)
        }); 
        return () => unsubscribe();
},[])

    
return (
    <main className='h-80/100'>
        <div >
            {messages && messages.map((message) =>( 
            <Message key={message.id} message={message} />
            ))}
            
        </div>
        <span ref={scroll}></span>
    </main>
)
}

export default Chat;