import axios from 'axios';

// Define the API URL
const apiUrl = 'https://one4-sentences-backend.onrender.com/';

// Create an async function to make the API request
async function fetchData() {
  try {
    // Make a GET request to the API
    const response = await axios.get(apiUrl);

    // Access the response data
    const data = response.data;

    // Handle the data as needed
    console.log(data);
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
  }
}

// Call the fetchData function to make the request
fetchData();
