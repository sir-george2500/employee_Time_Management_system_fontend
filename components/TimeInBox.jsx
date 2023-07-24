"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import '../app/globals.css';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Form from './Form';
import Menu from './Menu';

const TimeInBox = () => {
  const [showInputTimeIn, setShowInputTimeIn] = useState(false);
  const [showInputTimeOut, setShowInputTimeOut] = useState(false);

  const gobacktoMenuTimeIn = () => {
    setShowInputTimeIn((e) => !e);
    setShowInputTimeOut(false);
  };

  const gobacktoMenuTimeOut = () => {
    setShowInputTimeOut((e) => !e);
    setShowInputTimeIn(false);
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  // Helper function to get the current time
  function getCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Format the time with leading zeros if needed
    const formattedTime = `${formatTimeUnit(hours)}:${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)}`;
    return formattedTime;
  }

  // Helper function to format time units with leading zeros
  function formatTimeUnit(unit) {
    return unit < 10 ? `0${unit}` : unit;
  }

  // Update the time every second using useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  // Update the time on the client side
  useEffect(() => {
    setCurrentTime(getCurrentTime());
  }, [currentTime]);

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
      <div className='flex justify-center flex-col items-center w-96 h-96 border-2 border-slate-800 rounded bg-slate-600'>

        <h3 className='mb-3 text-5xl'>{currentTime}</h3>
        <div className='mt-18'>
        {showInputTimeIn && !showInputTimeOut ? (
          <Form
            gobacktoMenu={gobacktoMenuTimeIn}
            text={"TimeIn"}
          />
        ) : showInputTimeOut && !showInputTimeIn ? (
          <Form
            gobacktoMenu={gobacktoMenuTimeOut}
            text={"TimeOut"}
          />
        ) : (
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