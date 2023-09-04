"use client"
import React, { useEffect, useState } from 'react';
import getRequest from '@/app/services/getRequest';

const Table = () => {
  const [responseData, setResponseData] = useState(null);
  const [responseDataForStudent,setResponseDataForStudent] = useState(null);
  const [error, setError] = useState(null);

  const [track,setTrack] = useState(true);

  const handleTrack = () => {
    setTrack((e)=>!e);
  }

  //Get the staff data 
  useEffect(() => {
    const getData = async () => {

      const user_data = {
        role:"staff"
      }
      try {
        const data = await getRequest('currentDay_data', 'POST',user_data);

        console.log(data);
        setResponseData(data);
      } catch (error) {
        setError(error.message);
      }
    };
 // Fetch data when the component mounts
    getData(); 
  }, []);

  //get the student data 
   useEffect(() => {
    const getStudentData = async () => {

      const user_data = {
        role:"student"
      }
      try {
        const data = await getRequest('currentDay_data', 'POST',user_data);
        
        setResponseDataForStudent(data);
      } catch (error) {
        setError(error.message);
      }
    };
 // Fetch data when the component mounts
    getStudentData(); 
  }, []);

  const formatUsername = (username) => {
    const formattedUsername = username.replace(/\\t/g, ' ');
    return formattedUsername;
  };

  return (
    <div className='p-5'>
      <center>
    <div className="flex space-evenly w-60 dark:bg-gray-700 mb-2 p-2 rounded-l-lg rounded-r-lg">
      <div className={`items-center text-center flex-grow ${track == true ? 'bg-slate-800 border-solid border-t border-r border-l border-b  border-sky-500' :  'dark:bg-gray-700 text-zinc-500' }  py-2 rounded-l-lg rounded-r-lg`}
       onClick={handleTrack}
      >
        Student
      </div>

      <div className={`items-center text-center flex-grow ${track == false ? 'bg-slate-800 border-solid border-t border-r border-l border-b  border-sky-500' :  'dark:bg-gray-700 text-zinc-500'} py-2 rounded-l-lg rounded-r-lg`}
        onClick={handleTrack}
      >
        Staff
      </div>
   </div>
   </center>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

    
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              Time In
            </th>
            <th scope="col" className="px-6 py-3">
              Time Out
            </th>
          </tr>
        </thead>
        <tbody>

          {track == false ?(
          responseData &&
            responseData.users.map((user, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } border-b dark:bg-gray-900 dark:border-gray-700`}
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {formatUsername(user.username)} 
                </td>
                <td className="px-6 py-4">{user.userTimeIn}</td>
                <td className="px-6 py-4">{user.userTimeOut}</td>
              </tr>
            ))

          ):(

            responseDataForStudent &&
              responseDataForStudent.users.map((user, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } border-b dark:bg-gray-900 dark:border-gray-700`}
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {formatUsername(user.username)} 
                  </td>
                  <td className="px-6 py-4">{user.userTimeIn}</td>
                  <td className="px-6 py-4">{user.userTimeOut}</td>
                </tr>
              ))
          )} 
         
        </tbody>
      </table> 

      {error && <p>Error: {error}</p>}
    </div>
    </div>
  );
};

export default Table;
