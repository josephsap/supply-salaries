import React from 'react';
import styles from '../styles/salaryResults.module.scss';

const SalaryResults = (props) => {
  if(props.activeJob) {
    return (
      <h3 className={styles.salaryResultText}>
        ${props.activeJob.salaryLow} - ${props.activeJob.salaryHigh}
      </h3>
    );
    } else {
      return (
        <p>select stuff to see estimated salary numbers</p>
      );
    }
};

export default SalaryResults;
