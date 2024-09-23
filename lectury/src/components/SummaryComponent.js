import React, { useEffect, useState } from 'react';

const SummaryComponent = () => {
  const [summary, setSummary] = useState('');
  const [inputText, setInputText] = useState('')

  const handleGenerateSummary = async () => {
    if (!inputText.trim()) {
      throw new Error("Text Empty")
    }

    try {
      const response = await fetch('/api/generate-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoURL: inputText }),  
    });

    const data = await response.json();
    setSummary(data.summary)

  } catch(error) {
    console.error('Error generating summary:', error);
  }
  };


  return (
    <div>
      <h1>Lecture Summary</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder='Enter Youtube URL'
        rows="4"
        cols="50"
      >  
      </textarea>
      <button onClick={handleGenerateSummary}>GENERATE BUTTON</button>
      <p>{summary}</p>  {/* Display the fetched summary */}
    </div>
  );
};

export default SummaryComponent;