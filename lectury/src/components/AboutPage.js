import React from 'react';
import './AboutPage.css';
import Navbar from './Navbar';
import StepCard from './StepCard';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Navbar />

      <div className="about-content">
        <h2 className="about-heading">What is <span className="brand-purple">Lectury</span>?</h2>

        <p className="about-text">
          Lectury is an AI-powered tool that transforms YouTube links or uploaded video and audio files
          into clear, easy-to-read summaries. Whether you're reviewing lectures, meetings, interviews, or any
          long-form content, Lectury helps you save time, stay focused, and absorb information more efficiently.
          It’s built to support students, professionals, and lifelong learners who want to get the most out of
          their content without spending hours watching or rewatching.
        </p>

        <p className="about-text">
          Designed with simplicity and speed in mind, Lectury turns hours of video or audio into quick summaries
          you can review anytime. By cutting through the noise and highlighting what matters, Lectury makes it
          easier to stay on top of your knowledge, stay organized, and make learning more accessible and enjoyable.
        </p>

        <div className="about-divider"></div>

        <h3 className="about-subheading">How it works:</h3>

        <div className="steps-container">
            <StepCard
                stepNumber={1}
                title="Upload Your Content"
                description="Paste a YouTube link or upload a supported video or audio file. Lectury works with common formats like .mp4, .mp3, .wav, and more."
            />

            <StepCard
                stepNumber={2}
                title="Generate the Summary"
                description="Click the button to generate your summary. Lectury uses AI to process your content and extract the key points in a clear, readable format."
            />

            <StepCard
                stepNumber={3}
                title="Review and Save"
                description="View your summary in seconds. You can read it and copy it, making it perfect for quick reviews and smarter studying."
            />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
