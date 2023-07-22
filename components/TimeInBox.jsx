import Image from 'next/image'
import React from 'react'

const TimeInBox = () => {
  return (
    <>
    <div  className='flex'>
   <Image 
     src={require("../public/image/svl_logo.png")}
     width={100}
     height={100}
     className='flex-initial mr-4'
   />
    <h1 className='flex-1 text-3xl pt-9'>Sign System</h1>
    </div>
    <div  className='w-96 h-96 border-2 border-slate-800 rounded'>
        TimeInBox     
    </div>
    </>
  )
}

export default TimeInBox