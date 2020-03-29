import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from '../styles/salaryResults.module.scss';

const SalaryResults = (props) => {
  const { handleSubmitLoading, activeJob, posVal, locVal, loading } = props;
    
  if (activeJob && posVal !== 'position' && locVal !== 'location') {
    return (
      <Fade when={!handleSubmitLoading} duration={1500} wait={100}>
        <div className={styles.resultsContainer}>
          <div className={styles.numberContainer}>
            <h3 className={styles.salaryResultText}>${activeJob.salaryLow}</h3>
            <p>{activeJob.salaryRangeLowDesc}</p>
          </div>
          <p className={styles.salaryResultText}>&ndash;</p>
          <div className={styles.numberContainer}>
            <h3 className={styles.salaryResultText}>${activeJob.salaryHigh}</h3>
            <p>{activeJob.salaryRangeHighDesc}</p>
          </div>
        </div>
      </Fade>
    );
    } else {
      return (
        <Fade top cascade when={!loading} duration={1200}>
          <h4 className={styles.introText}>Select both a Job and a Location to see the estimated salary rages.</h4>
        </Fade>
      );
    }
};

export default SalaryResults;
