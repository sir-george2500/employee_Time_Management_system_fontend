"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import '../app/globals.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useLottie } from "lottie-react";

import Form from './Form';
import Menu from './Menu';
import Modal from "./Modal";
import sendRequest from '@/app/services/sendRequest';
import { ErrorView } from './ErrorView';
import { SucessView } from './SuccessView';



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

 
  

  const gobacktoMenuTimeOut = () => {
    setShowInputTimeOut((e) => !e);
    setShowInputTimeIn(false);
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [errorMessage,setErrorMessage]=useState('');
  const [successMsg,setSucessMsg]=useState('');
  const [animationCheck ,setAnimationCheck ] = useState(true)
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
            setErrorMessage("User already log their Time in for today");
            handleOpenModal();
           }else if(reponse==201){

             setSucessMsg("Successfully Logged Time in");
             setAnimationCheck(false)
             handleOpenModal();
            return  resetForm();
           }else {
             throw new Error("User Time Could not be login "+reponse);
           }
      
    },
  });

  const formilkSendTimeOut = useFormik({
    initialValues: {
      username: '',
     
    },
    validationSchema: validationSchema,
    onSubmit: async (values,{resetForm}) => {
      console.log(values);

      
    },
  });

  return (
    <>
     <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className='w-100'>
       
        {/*Check if it Error or Sucess*/}
        { animationCheck?(
         <ErrorView 
          errorMessage={errorMessage}
         />
        ):(
          <SucessView
           msg={successMsg}
          />
        )

        }
      
      
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
            name="username"
            gobacktoMenu={gobacktoMenuTimeOut}
            text={"TimeOut"}
            value={formilkSendTimeOut.values.username}
            onChange={formilkSendTimeOut.handleChange}           
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