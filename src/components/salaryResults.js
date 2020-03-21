import React from 'react';
import styles from '../styles/salaryResults.module.scss';

const SalaryResults = (props) => {
  if (props.activeJob && props.posVal !== 'position' && props.locVal !== 'location') {
    return (
      <div className={styles.resultsContainer}>
        <div className={styles.numberContainer}>
          <h3 className={styles.salaryResultText}>${props.activeJob.salaryLow}</h3>
          <p>{props.activeJob.salaryRangeLowDesc}</p>
        </div>
        <p className={styles.salaryResultText}>&ndash;</p>
        <div className={styles.numberContainer}>
          <h3 className={styles.salaryResultText}>${props.activeJob.salaryHigh}</h3>
          <p>{props.activeJob.salaryRangeHighDesc}</p>
        </div>
      </div>
    );
    } else {
      return (
        <h4>Select both a Job and a Location to see the estimated salary rages.</h4>
      );
    }
};

export default SalaryResults;
