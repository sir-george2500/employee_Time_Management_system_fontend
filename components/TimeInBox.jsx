"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import '../app/globals.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useLottie } from "lottie-react";
import fail from "../public/animations/fail.json"
import Form from './Form';
import Menu from './Menu';
import Modal from "./Modal";
import sendRequest from '@/app/services/sendRequest';



const TimeInBox = () => {
  const [showInputTimeIn, setShowInputTimeIn] = useState(false);
  const [showInputTimeOut, setShowInputTimeOut] = useState(false);

  const gobacktoMenuTimeIn = () => {
    setShowInputTimeIn((e) => !e);
    setShowInputTimeOut(false);
  };

  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const style = {
    height:250,
    marginTop:"30px",
    width:350
  }
  
  //get me the animation data
  const options = {
    animationData: fail,
    loop:true
  };

  const { View } = useLottie(options,style);

  const gobacktoMenuTimeOut = () => {
    setShowInputTimeOut((e) => !e);
    setShowInputTimeIn(false);
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [showAnimation,setShowAnimation] =useState(false);
  const [errorMessage,setErrorMessage]=useState('Normal Error Message');

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

  
  const validationSchema = yup.object({
    username: yup
      .string('Enter your username')
      .required('Username is required'),
  });


  /**
   * @param -> username
   * @return -> void 
   */
  const formilkSendTimein = useFormik({
    initialValues: {
      username: '',
     
    },
    validationSchema: validationSchema,
    onSubmit: async (values,{resetForm}) => {
      //format the username
      const username = values.username;
      const usernameWithoutWhiteSpace = username.replace(/\s/g, '\\t');
  
      //get me the day of the week and time
      const daysOfWeek = ["Sun", "Mon", "Tue", "W", "Thu", "Fri", "Sat"];
      const currentYear = new Date().getFullYear();
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentDay = currentDate.getDay();
      const currentDayString = daysOfWeek[currentDate.getDay()];
      const userTime =currentYear+'-'+currentMonth+'-'+currentDay+'-'+currentDayString+'-'+currentTime;

      const user_data = {
        username:usernameWithoutWhiteSpace,
        time_in:userTime.toString()
      }

     
           const reponse = await  sendRequest('timeIn','POST',user_data);
           console.log(reponse);

           if(reponse==409){
            console.log("User already log their Time in for today");
           }else if(reponse==201){

             console.log("Success");

             resetForm();
           }else {
             throw new Error("User Time Could not be login "+reponse);
           }
      
    },
  });

  const formilkSendTimeOut = useFormik({
    initialValues: {
      username: '',
     
    },
    // validationSchema: validationSchema,
    onSubmit: async (values,{resetForm}) => {
      console.log(values);

      
    },
  });

  return (
    <>
     <div>
      <h1>Custom Modal Example</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className='w-100'>
        <>
        {View}
        <p className='text-black'>{errorMessage}</p>
        </>
        </div>
      </Modal>
    </div>
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
          <form onSubmit={formilkSendTimein.handleSubmit}>
          <Form
           name="username"
            gobacktoMenu={gobacktoMenuTimeIn}
            text={"TimeIn"}
            value={formilkSendTimein.values.username}
            onChange={formilkSendTimein.handleChange}
            errorMessage={formilkSendTimein.errors.username}
          />
          </form>
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