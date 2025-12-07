

import React, { useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link'; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav 
        className="
          font-montserrat fixed top-0 left-0 z-50 w-full 
          flex justify-between items-center 
          bg-black/85 backdrop-blur-md 
          shadow-xl transition-all duration-300
          px-10 py-2
          lg:py-1 lg:px-20 
        "
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
          <Image 
            src="/img/Ovrizon-logo-removebg-preview.png" 
            alt="Ovrizon Logo" 
            width={100} 
            height={100} 
            className="h-[80px] w-auto" 
          />
          </Link>
        </div>

        <div 
            className="md:hidden cursor-pointer" 
            onClick={toggleMenu}
        >
            <div 
                className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`}
            >
                <span className="hamburger-line line-top"></span>
                <span className="hamburger-line line-middle"></span>
                <span className="hamburger-line line-bottom"></span>
            </div>
        </div>
        <div 
          className={`
            md:flex md:justify-end md:items-center 
            md:static md:w-auto md:bg-transparent md:shadow-none 
            md:flex-row md:justify-end md:gap-12
            ${isMenuOpen ? 'flex' : 'hidden'} 
            absolute top-[88px] left-0 right-0 
            flex flex-col bg-black shadow-lg 
            w-full py-4 space-y-3 md:space-y-0
          `}
        >
          
          <Link href="/about" className="text-white-300 font-medium text-base transition duration-300   animate-underline-grow block md:inline-block px-4 py-2">
            ABOUT
          </Link>
          <Link href="/insights" className="text-white-300 font-medium text-base transition duration-300   animate-underline-grow  block md:inline-block px-4 py-2">
           INSIGHTS
          </Link>
          <Link href="/investment" className="text-white-300 font-medium text-base transition duration-300   animate-underline-grow  block md:inline-block px-4 py-2">
            INVESTMENT
          </Link>
          <Link href="#footer" className="text-white-300 font-medium text-base transition duration-300   animate-underline-grow  block md:inline-block px-4 py-2">
            CONTACT
          </Link>
           <Link href="#footer" className="text-white-300 font-medium text-base transition duration-300   animate-underline-grow  block md:inline-block px-4 py-2">
            DOTTDASH
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;