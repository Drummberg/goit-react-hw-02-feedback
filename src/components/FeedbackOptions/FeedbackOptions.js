import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            onClick={() => onBtnClick(option)}
            className={styles.button}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
