import React from 'react';
import './SummarizeButton.css';

const SummarizeButton = ({ onClick, children, type = 'button' }) => {
  return (
    <button className="summarize-btn" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default SummarizeButton;
