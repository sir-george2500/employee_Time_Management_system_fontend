"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import '../app/globals.css';


const TimeInBox = () => {

    const [showInput,setShowInput] = useState(true);
  return (
    <>
      <div className='flex'>
        <Image
          src={require("../public/image/svl_logo.png")}
          width={100}
          height={100}
          className='flex-initial mr-4'
        />
        <h1 className='flex-1 text-3xl pt-9'>Time System</h1>
      </div>
      <div className='flex justify-center flex-col items-center w-96 h-96 border-2 border-slate-800 rounded'>
        <div className='mt-18'>
        {showInput && (
            <p>Hello, World</p>
        )

        }

          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            style={{ width: '150px', height: '50px' }} 
            onClick={()=>setShowInput((e)=>!e)}
          >
            Time In
          </button>
        </div>
        <div className='mt-4'>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            style={{ width: '150px', height: '50px' }} 
          >
            Time Out
          </button>
        </div>
      </div>
    </>
  );
};

export default TimeInBox;
