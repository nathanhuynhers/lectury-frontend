import React, { useEffect, useState } from 'react';

const SummaryComponent = () => {
  const [summary, setSummary] = useState(''); // State to store the fetched summary

  // UseEffect Hook to fetch data when the component mounts
  useEffect(() => {
    // Fetch data from the backend API
    fetch('/api/summary')  // Ensure the backend URL is correct
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setSummary(data.message))  // Update state with fetched data
      .catch((error) => console.error('Error fetching data:', error));
  }, []);  // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Lecture Summary</h1>
      <p>{summary}</p>  {/* Display the fetched summary */}
    </div>
  );
};

export default SummaryComponent;