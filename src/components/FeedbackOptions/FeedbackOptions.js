import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            className={styles.button}
            type="button"
            key={option}
            onClick={() => onBtnClick(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
