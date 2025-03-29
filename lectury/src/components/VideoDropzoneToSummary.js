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

    const formData = new FormData();
    formData.append('video', file); // Must match field name in multer

    setError('');
    setSummary('');

    try {
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
