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
    try {
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
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      throw new Error('An error occurred while making the request: ' + error.message);
    }
  };
  
  export default sendRequest;
  