import React from 'react';
import './StepCard.css';

const StepCard = ({ stepNumber, title, description }) => {
  return (
    <div className="step-card">
      <h4>
        Step {stepNumber}: <span className="step-highlight">{title}</span>
      </h4>
      <div className="step-divider"></div>
      <p>{description}</p>
    </div>
  );
};

export default StepCard;
