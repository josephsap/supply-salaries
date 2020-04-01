import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from '../styles/salaryResults.module.scss';

const SalaryResults = (props) => {
  const { handleSubmitLoading, activeJob, posVal, locVal, loading } = props;
    
  if (activeJob && posVal !== 'position' && locVal !== 'location') {
    return (
      <Fade when={!handleSubmitLoading} duration={1500} wait={100}>
        <div className={`${styles.resultsContainer} ${styles.salaryArea}`}>
          <div className={styles.numberContainer}>
            <h3 className={styles.salaryResultText}>${activeJob.salaryLow}</h3>
            <p>{activeJob.salaryRangeLowDesc}</p>
          </div>
          <p className={`${styles.salaryResultText} ${styles.salaryDash}`}>&ndash;</p>
          <div className={styles.numberContainer}>
            <h3 className={styles.salaryResultText}>${activeJob.salaryHigh}</h3>
            <p>{activeJob.salaryRangeHighDesc}</p>
          </div>
        </div>
      </Fade>
    );
    } else {
      return (
        <div className={!loading ? `${styles.textFocusIn} ${styles.salaryArea}` : `${styles.salaryArea}`}>
          <h4 className={styles.introText}>Select both a Job and a Location to see the estimated salary rages.</h4>
        </div>
      );
    }
};

export default SalaryResults;
