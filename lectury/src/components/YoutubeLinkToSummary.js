import React, { useState } from 'react';
import SummarizeButton from './SummarizeButton';
import './YoutubeLinkToSummary.css';

const YoutubeLinkToSummary = ({ setSummary, summaryRef }) => {
  const [inputText, setInputText] = useState('');

  const handleGenerateSummary = async () => {
    if (!inputText.trim()) return;

    try {
      const isDemoMode = true;
      if (!isDemoMode) {
        const response = await fetch('/api/generate-summary', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ videoURL: inputText })
        });
  
        const data = await response.json();
      }
      const data = { summary: "This is a mock summary for demonstration purposes. Summary function works but is disabled for front-end UI design demonstrations! \n\nIn this lecture, the professor provided an overview of the key principles of cognitive psychology, focusing on how humans perceive, process, and remember information. The discussion began with an explanation of attention mechanisms, including selective and divided attention, and how these affect memory formation. The lecture then explored short-term and long-term memory systems, emphasizing the role of encoding strategies and retrieval cues. Real-world examples, such as eyewitness testimony and advertising techniques, were used to illustrate core concepts. The session concluded with a brief overview of common cognitive biases and their impact on decision-making, preparing students for the upcoming unit on problem-solving and reasoning." };
      setSummary(data.summary);

      if (summaryRef?.current) {
        setTimeout(() => {
          summaryRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
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
