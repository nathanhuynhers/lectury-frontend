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
        body: JSON.stringify({ text: inputText }),  
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
      <p>{summary}</p>  {/* Display the fetched summary */}
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder='Type HERE'
        rows="4"
        cols="50"
      >  
      </textarea>
      <button onClick={handleGenerateSummary}>GENERATE BUTTON</button>
    </div>
  );
};

export default SummaryComponent;