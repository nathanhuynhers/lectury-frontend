import React, { useState } from 'react';
import YoutubeLinkToSummary from './YoutubeLinkToSummary';
import VideoDropzoneToSummary from './VideoDropzoneToSummary';
import SummaryDisplay from './SummaryDisplay';
import Navbar from './Navbar';
import './MainPage.css';

const MainPage = () => {
  const [summary, setSummary] = useState('');

  return (
    <div className="main-page">
      <Navbar />

      <h1 className="main-heading">
        Let's Get <span className="brand">Lectury</span>
      </h1>

      <p className="subtext">
        Lectury turns YouTube links or video files into quick, easy-to-read summaries for lectures, meetings, and more.
      </p>

      <YoutubeLinkToSummary setSummary={setSummary} />
      <div className="divider-wrapper">
        <div className="divider">
          <span className="divider-text">or</span>
        </div>
      </div>
      <VideoDropzoneToSummary setSummary={setSummary} />
      <div className="divider-line"></div>
      <SummaryDisplay summary={summary} />
    </div>
  );
};

export default MainPage;
