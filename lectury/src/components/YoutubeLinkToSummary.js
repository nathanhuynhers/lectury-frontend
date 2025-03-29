import React, { useState } from 'react';
import SummarizeButton from './SummarizeButton';
import './YoutubeLinkToSummary.css';

const YoutubeLinkToSummary = ({ setSummary }) => {
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
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder='Enter Youtube URL'
        rows="4"
        cols="50"
      >  
      </textarea>
      <SummarizeButton onClick={handleGenerateSummary}>Summarize</SummarizeButton>
    </div>
  );
};

export default YoutubeLinkToSummary;