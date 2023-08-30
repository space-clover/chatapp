"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Userstate from '../components/userstate';
import Chat from '../components/chat';
import Sendmessages from '../components/sendmessages';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);
  return (
    <main className="flex items-center justify-between">
      <section className={isMobile ? 'hidden' : 'w-32/100 h-screen bg-cyan-800 bg-opacity-5'}>
        {!isMobile && <Userstate />}
      </section>
      <section className="lg:w-2/3 w-full h-screen">
        <Navbar />
        <Chat />
        <Sendmessages />
      </section>
    </main>
  );
}