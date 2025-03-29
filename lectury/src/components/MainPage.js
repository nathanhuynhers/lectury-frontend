import React, { useEffect, useState, useRef } from 'react';
import YoutubeLinkToSummary from './YoutubeLinkToSummary';
import VideoDropzoneToSummary from './VideoDropzoneToSummary';
import SummaryDisplay from './SummaryDisplay';
import Navbar from './Navbar';
import './MainPage.css';

const MainPage = () => {
  const [summary, setSummary] = useState('');
  const summaryRef = useRef(null);

  useEffect(() => {
    if (summary && summaryRef.current) {
      summaryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [summary]);

  return (
    <div className="main-page">
      <Navbar />

      <h1 className="main-heading">
        Let's Get <span className="brand">Lectury</span>
      </h1>

      <p className="subtext">
        Lectury turns YouTube links or video files into quick, easy-to-read summaries for lectures, meetings, and more.
      </p>

      <YoutubeLinkToSummary setSummary={setSummary} summaryRef={summaryRef} />
      <div className="divider-wrapper">
        <div className="divider">
          <span className="divider-text">or</span>
        </div>
      </div>
      <VideoDropzoneToSummary setSummary={setSummary} summaryRef={summaryRef} />
      <div className="divider-line"></div>
      <SummaryDisplay summary={summary} ref={summaryRef} />
    </div>
  );
};

export default MainPage;
