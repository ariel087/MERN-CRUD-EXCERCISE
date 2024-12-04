// api.js
export const getAll = async () => {
    try {
      const response = await fetch('http://localhost:3002/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in getAll:', error);
    }
  };
  