"use client"

import { Search, User, ShoppingCart } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [isMounted, setIsMounted]=useState(false)

  useEffect(()=>{
    setIsMounted(true)
  },[])
  
  if(!isMounted) return <div>Loading....</div>

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex flex-wrap md:flex-nowrap justify-between items-center px-8 py-3 border-b shadow-sm text-sm md:text-base'>
      
      <div className='flex justify-between gap-3'>
        <Search></Search>
        <input type="text" placeholder='Search'/>
      </div>
      <div className='flex justify-between gap-x-20'>
        <a>Home & Living</a>
        <a>Accessories</a>
        <a>Stationery</a>
      </div>
      <div className='flex justify-between items-center gap-4'>
        <button className='border border-gray-300 rounded-full p-2 items-center justify-center'>
        <ShoppingCart ></ShoppingCart>
        </button>
        <User ></User>
        <div>Log In</div>
      </div>
    </div>
  )
}
