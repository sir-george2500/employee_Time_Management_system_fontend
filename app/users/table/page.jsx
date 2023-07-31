"use client"
import getRequest from '@/app/services/getRequest';
import React, { useState } from 'react';

const Table = () => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const data = await getRequest("currentDay_data", "POST");
      setResponseData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <button onClick={getData}>Get Data</button>
      {error && <p>Error: {error}</p>}
      {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>}
    </>
  );
};

export default Table;
