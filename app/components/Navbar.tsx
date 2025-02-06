"use client";

import { Search, User, ShoppingCart, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div>Loading....</div>;

  return (
    <nav className="fixed top-0 left-0 z-10 w-full h-20 flex justify-between items-center px-8 py-3 bg-white border-b shadow-sm text-sm md:text-base">
      {/* Left */}
      <div className="flex justify-between items-center gap-6">
        <div className="font-bold text-4xl">JSX</div>
        <div className="hidden md:flex">
          <SearchCompos isMobile={false}></SearchCompos>
        </div>
      </div>

      {/* Center */}
      <div className="hidden md:flex justify-between gap-x-20">
        <Navlinks isMobile={false}></Navlinks>
      </div>

      {/* Right */}
      <div className="flex justify-between items-center gap-6">
        <button className="border border-gray-300 rounded-full p-2 items-center justify-center">
          <ShoppingCart></ShoppingCart>
        </button>
        <div className="hidden md:flex">
          <LoginCompos isMobile={false}></LoginCompos>
        </div>

        {/* Smaller screens menu bar */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? null : <Menu></Menu>}
          </button>
        </div>
        {isMenuOpen && (
          <div className="h-full w-full fixed top-0 left-0 right-0 z-50 bg-white p-3">
            <MenuOptions toggleMenu={toggleMenu}></MenuOptions>
          </div>
        )}
      </div>
    </nav>
  );
}

const Navlinks = ({isMobile}:any) => {
  return (
    <>
      <Link href="/" className={`${isMobile?"text-xl":"text-base"}`}>Home & Living</Link>
      <Link href="/accesories" className={`${isMobile?"text-xl":"text-base"}`}>Accesories</Link>
      <Link href="/stationery" className={`${isMobile?"text-xl":"text-base"}`}>Stationery</Link>
    </>
  );
};

const LoginCompos = ({isMobile}:any) => {
  return (
    <div className="flex justify-center items-center gap-3">
      <User></User>
      <div className={`${isMobile?"text-xl":"text-base"}`}>Log In</div>
    </div>
  );
};

const SearchCompos = ({isMobile}:any) => {
  const inputRef=useRef<HTMLInputElement>(null);
  return (
    <button className="flex justify-between items-center gap-3" onClick={()=>{
      if(inputRef.current)inputRef.current.focus()
    }}>
      <Search></Search>
      <input ref={inputRef} type="text" placeholder="Search" className={`w-full rounded-lg ${isMobile?"text-xl p-1.5":"text-base p-1.5"}`}/>
    </button>
  );
};

const MenuOptions = ({ toggleMenu }: any) => {
  return (
    <div className="flex justify-between items-start md:hidden">
      <div className="flex flex-col gap-3 items-start">
        <div className="flex flex-col items-start gap-3 border-b-2 border-footerBackground p-3">
          <div>
            <LoginCompos isMobile={true}></LoginCompos>
          </div>
          <div>
            <SearchCompos isMobile={true}></SearchCompos>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start p-3">
          <Navlinks isMobile={true}></Navlinks>
        </div>
      </div>
      <button onClick={toggleMenu} className="p-3">
        <X></X>
      </button>
    </div>
  );
};
