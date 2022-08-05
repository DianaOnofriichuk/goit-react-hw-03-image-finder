import './Button.css';
import { useState } from 'react';

const Button = ({ pageCounter, totalImages, onNextClick, onPreviousClick }) => {
  return (
    <div className="buttons-container">
      {pageCounter >= 2 && (
        <button
          className="pagination-btn"
          onClick={() => {
            onPreviousClick();
          }}
          type="button"
        >
          Previous
        </button>
      )}
      <button
        className="pagination-btn"
        onClick={() => {
          onNextClick();
        }}
        type="button"
      >
        Next
      </button>
      )
    </div>
  );
};

export default Button;
