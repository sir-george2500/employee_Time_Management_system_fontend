/**
 * this method is use for sending the Request 
 * @param {*} endpoint 
 * @param {*} method 
 * @param {*} body 
 * @returns 
 */

const sendRequest = async (endpoint, method, body = null) => {
    const baseUrl = 'http://127.0.0.1:8000';
    const url = `${baseUrl}/${endpoint}`;
    
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },

        body: body ? JSON.stringify(body) : null,
      };
     
     
        const response = await fetch(url, options);
      
       
        if (response.ok) {
          return response.json();
        } else {
          const errorStatus = response.status;
          const errorData = await response.json();
          const errorMessage = errorData.detail; // Assuming the backend returns the error message in the 'detail' field
          throw new Error('Error Status: ' + errorStatus + ', Message: ' + errorMessage);
        }

      
      };
   

  export default sendRequest;
  