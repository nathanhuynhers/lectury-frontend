import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import SelectFileButton from './SelectFileButton';
import './VideoDropzoneToSummary.css';
import CloudLogo from '../CloudLogo.svg';

const VideoDropzoneToSummary = ({ setSummary, summaryRef }) => {
  const [error, setError] = useState('');

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setError('');
    setSummary('');

    try {
      // Demo Mode
      const isDemoMode = true; // Set to false for full functionality of API calls
      if (isDemoMode) {
        const mockData = { summary: "This is a mock summary for demonstration purposes. Summary function works but is disabled for front-end UI design demonstrations! \n\nIn this lecture, the professor provided an overview of the key principles of cognitive psychology, focusing on how humans perceive, process, and remember information. The discussion began with an explanation of attention mechanisms, including selective and divided attention, and how these affect memory formation. The lecture then explored short-term and long-term memory systems, emphasizing the role of encoding strategies and retrieval cues. Real-world examples, such as eyewitness testimony and advertising techniques, were used to illustrate core concepts. The session concluded with a brief overview of common cognitive biases and their impact on decision-making, preparing students for the upcoming unit on problem-solving and reasoning." };
        setSummary(mockData.summary);

        if (summaryRef?.current) {
            setTimeout(() => {
                summaryRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
      } else {
        const formData = new FormData();
        formData.append('video', file); // Must match field name in multer
        const res = await fetch('/api/upload-video', {
          method: 'POST',
          body: formData
        });
  
        const data = await res.json();
  
        if (res.ok) {
          setSummary(data.summary);
  
          if (summaryRef?.current) {
            setTimeout(() => {
              summaryRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        } else {
          setError(data.error || 'Something went wrong.');
        }
      }
    } catch (err) {
      setError('Failed to upload or transcribe the file.');
      console.error(err);
      console.error(error)
    }
  }, [setSummary, error, summaryRef]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'video/mp4': ['.mp4'],
      'audio/mpeg': ['.mp3'],
      'audio/wav': ['.wav'],
      'audio/x-m4a': ['.m4a'],
      'audio/webm': ['.webm'],
      'audio/flac': ['.flac'],
      'audio/ogg': ['.ogg'],
    },
    multiple: false
  });

  return (
    <div {...getRootProps()} className="dropzone-container">
      <div className="dropzone">
        <input {...getInputProps()} />
        <img src={CloudLogo} alt="CloudLogo" className="dropzone-icon" />
        <div className="dropzone-title">Drag and Drop a Supported File to Summarize</div>
        <div className="dropzone-subtext">
          Supports .mp4, .mp3, .wav, .m4a, .flac, .ogg, or .webm Files
        </div>
        <SelectFileButton>Select file</SelectFileButton>
      </div>
    </div>
  );
};

export default VideoDropzoneToSummary;
