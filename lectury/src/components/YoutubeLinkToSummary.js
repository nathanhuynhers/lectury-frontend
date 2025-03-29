import React, { useState } from 'react';
import SummarizeButton from './SummarizeButton';
import './YoutubeLinkToSummary.css';

const YoutubeLinkToSummary = ({ setSummary }) => {
  const [inputText, setInputText] = useState('');

  const handleGenerateSummary = async () => {
    if (!inputText.trim()) return;

    try {
      const response = await fetch('/api/generate-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoURL: inputText })
      });

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error('Error generating summary:', error);
    }
  };

  return (
    <div className="youtube-form">
      <input
        type="text"
        className="youtube-input"
        placeholder="Paste a Youtube Link"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <SummarizeButton onClick={handleGenerateSummary}>
        Summarize
      </SummarizeButton>
    </div>
  );
};

export default YoutubeLinkToSummary;
