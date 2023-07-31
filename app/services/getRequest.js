/**
 * this method is use for sending the Request 
 * @param {*} endpoint 
 * @param {*} method 
 * @param {*} body 
 * @returns 
 */

const getRequest = async (endpoint, method, body = null) => {
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
            const data = await response.json();
          return data;
        } else {
          const errorStatus = response.status;
          return errorStatus;
          // Assuming the backend returns the error message in the 'detail' field
        }

      
      };
   

  export default getRequest;
  