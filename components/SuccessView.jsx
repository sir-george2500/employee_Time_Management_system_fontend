import React from 'react'
import { useLottie } from "lottie-react";
import success from "../public/animations/success.json"

export const SucessView = ({msg}) => {

    //Style for the Error animation
  const style = {
        height:250,
        marginTop:"30px",
        width:350
      }

  //get me the animation data
  const options = {
    animationData: success,
    loop:true
  };

  const { View } = useLottie(options,style);


  return (
    <>
    {View}
    <p className='text-black  text-center'> {msg}</p>
    </>
  )
}
