import React, { useState } from 'react';
import YoutubeLinkToSummary from './YoutubeLinkToSummary';
import VideoDropzoneToSummary from './VideoDropzoneToSummary';
import SummaryDisplay from './SummaryDisplay';


const MainPage = () => {
  const [summary, setSummary] = useState('');

  return (
    <div>
      <h1>Lecture Summarizer</h1>

      <YoutubeLinkToSummary setSummary={setSummary} />
      <VideoDropzoneToSummary setSummary={setSummary} />

      <SummaryDisplay summary={summary} />
    </div>
  );
};

export default MainPage;
