"use client"
import React, { useEffect, useState } from "react";

export default function Topbar() {
    const message=[
        "Get 15% Off on your first purchase.",
    "Free shipping on orders over $75.",
    "New arrivals are here! Check them out.",
    ]
    const [messageIndex,setMessageIndex]=useState(0)


    useEffect(()=>{
        const messageInterval= setInterval(()=>{
            setMessageIndex((messageIndex)=>(messageIndex+1)%3)
            console.log(messageIndex)
        },10000)

        return ()=> {
            clearInterval(messageInterval)
            console.log("cleared Message Interval")
        }
    },[])

  return (
    <div className="bg-topbarBackground flex justify-center items-center p-3 text-slate-900">
      <div>
        {message[messageIndex]}
      </div>
    </div>
  );
}
