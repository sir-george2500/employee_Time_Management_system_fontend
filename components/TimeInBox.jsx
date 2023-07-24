"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import '../app/globals.css';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Form from './Form';
import Menu from './Menu';

const TimeInBox = () => {
    
    const [showInputTimeIn,setShowInputTimeIn] = useState(false);
    const [showInputTimeOut,setShowInputTimeOut] = useState(false);


    const gobacktoMenuTimeIn = () => {
      setShowInputTimeIn((e)=>!e);
      setShowInputTimeOut(false);
    };

    const gobacktoMenuTimeOut = () => {
      setShowInputTimeOut((e)=>!e);
      setShowInputTimeIn(false);
    };


   


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
        {showInputTimeIn && !showInputTimeOut ?(
         <Form 
          gobacktoMenu={gobacktoMenuTimeIn}
          text={"TimeIn"}
         />
        ):showInputTimeOut && !showInputTimeIn?(
          <Form  
          gobacktoMenu={gobacktoMenuTimeOut}
          text={"TimeOut"}
         />
        ):(
         <Menu
          goToTimeIn={gobacktoMenuTimeIn}
          goToTimeOut={gobacktoMenuTimeOut}
         />
        )

        }
       
        </div>      
      </div>
    </>
  );
};

export default TimeInBox;
