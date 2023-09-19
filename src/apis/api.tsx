// ApiExample.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiExample: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://your-backend-api.render.com/api/some-endpoint';

    // Create an async function to make the API request
    const fetchData = async () => {
      try {
        // Make a GET request to the API
        const response = await axios.get(apiUrl);

        // Access the response data
        const responseData = response.data;

        // Update the component's state with the data
        setData(responseData);
      } catch (error) {
        // Handle errors
        console.error('Error:', error);
      }
    };

    // Call the fetchData function to make the request when the component mounts
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Example</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ApiExample;
