import React, { forwardRef } from 'react';
import './SummaryDisplay.css';
import CopyTextButton from './CopyTextButton';

const SummaryDisplay = forwardRef(({ summary }, ref) => {
  if (!summary) return null;

  return (
    <div className="summary-wrapper" ref={ref}>
      <h3 className="summary-heading">Summary:</h3>
      <div className="summary-box">
        <p className="summary-text">{summary.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                {line}
                <br />
                </React.Fragment>
            ))}
        </p>
        <CopyTextButton textToCopy={summary} />
      </div>
    </div>
  );
});

export default SummaryDisplay;
