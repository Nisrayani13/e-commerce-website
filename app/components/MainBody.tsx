"use client";
import { useState } from "react";

const MainBody = () => {
  const [hovered, setHovered]=useState([false,false,false])

  return (
     <div className=" w-full h-screen">
        {/* Flex container for slides */}
        <div className="flex w-screen h-screen">
          {/* Container for slides */}
          {/* Slide 1 */}
          <div
            className="bg-cover bg-center relative flex justify-center items-center flex-[1] hover:flex-[5] transition-all duration-500 ease-in-out"
            style={{ backgroundImage: "url('/lady_with_bag.png')" }}
            onMouseEnter={() => setHovered((hovered) => [true, false, false])}
            onMouseLeave={() => setHovered((hovered) => [false, false, false])}
          >
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center gap-6 transition-opacity ${hovered[0] ? "opacity-100" : "opacity-0"}`}
            >
              <div className="text-white text-4xl">CUE THE COLOR</div>
              <button className="mt-8 text-xl rounded-full border border-white py-2 px-8 text-white">
                Shop Now
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="bg-cover bg-center relative flex justify-center items-center flex-[1] hover:flex-[5] transition-all duration-500 ease-in-out"
            style={{ backgroundImage: "url('/candles.png')" }}
            onMouseEnter={() => setHovered((hovered) => [false, true, false])}
            onMouseLeave={() => setHovered((hovered) => [false, false, false])}
          >
            <div
              className={`absolute inset-0 flex justify-center items-center italic text-slate-700 text-4xl py-2 px-4 rounded-lg transition-opacity ${
                hovered[1] ? "opacity-100" : "opacity-0"
              }`}
            >
              <div>Soothing Candles for Every Mood</div>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            onMouseEnter={() => setHovered((hovered) => [false, false, true])}
            onMouseLeave={() => setHovered((hovered) => [false, false, false])}
            className="bg-footerBackground relative flex justify-center items-center flex-[1] hover:flex-[5] transition-all duration-500 ease-in-out"
          >
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity ${
                hovered[2] ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="font-semibold text-4xl text-center mb-4">
                The Gift of Good Style
              </div>
              <p className="text-lg text-center">
                Discover unique gifts for every occasion. Find the perfect
                present for your loved ones.
              </p>
              <button className="mt-6 text-xl rounded-full border border-gray-600 py-2 px-8">
                Shop Now
              </button>
            </div>
          </div>
        </div>

      </div> 
  );
};



export default MainBody;
