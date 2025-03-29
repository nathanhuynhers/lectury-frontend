import React from 'react';
import './SelectFileButton.css';

const SelectFileButton = ({ onClick, children }) => {
  return (
    <button className="select-file-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default SelectFileButton;