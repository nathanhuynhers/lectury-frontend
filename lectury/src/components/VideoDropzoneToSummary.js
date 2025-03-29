import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const VideoDropzoneToSummary = ({ setSummary }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('video', file); // Must match field name in multer

    setLoading(true);
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
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('Failed to upload or transcribe the file.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [setSummary]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
    <div>
      <h2>Upload Audio or Video File for Summary</h2>

      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #ccc',
          padding: '30px',
          borderRadius: '10px',
          textAlign: 'center',
          backgroundColor: isDragActive ? '#f0f8ff' : '#fafafa',
          cursor: 'pointer'
        }}
      >
        <input {...getInputProps()} />
        {
          isDragActive
            ? <p>Drop the file here...</p>
            : <p>Drag & drop a supported audio/video file here, or click to select one</p>
        }
      </div>

      {loading && <p>Transcribing...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default VideoDropzoneToSummary;
