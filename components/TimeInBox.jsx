"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import '../app/globals.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextInput from './TextInput';
import Icon from '@mdi/react';
import { mdiAccount , mdiSend } from '@mdi/js';


//Menu 
const Menu = ({ goToTimeIn =null, goToTimeOut = null }) => (
  <>
    <div className='flex'>
      {/* Your Time In button */}
      <button
        type="button"
        className={`text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mt-2`}
        style={{ width: '150px', height: '50px' }} 
        onClick={goToTimeIn}
      >
        Time In
      </button>
    </div>
    <div className='mt-4'>
      {/* Your Time Out button */}
      <button
        type="button"
        className={`text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4`}
        style={{ width: '150px', height: '50px' }} 
        onClick={goToTimeOut}
      >
        Time Out
      </button>
    </div>
  </>
);

//Input 

const Input = ({gobacktoMenu , text}) =>(
<>
<div className='flex'>
 <TextInput 
  placeholder="Please enter your name"
  leftIcon={mdiAccount}
 />
 <button   className='mt-0.8 ml-2'>
 <Icon 
 path={mdiSend} 
 size={1} 
 color='#D1D5DB'     
 />
 </button>

</div>
<p>Leave {text} | Go back to <button onClick={gobacktoMenu}>menu</button></p>
</>

);

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
         <Input  
          gobacktoMenu={gobacktoMenuTimeIn}
          text={"TimeIn"}
         />
        ):showInputTimeOut && !showInputTimeIn?(
          <Input  
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
