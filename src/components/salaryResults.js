import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from '../styles/salaryResults.module.scss';

const SalaryResults = (props) => {
  const { handleSubmitLoading, activeJob, posVal, locVal, loading, isEarlyClick} = props;

  if (activeJob && posVal !== 'position' && locVal !== 'location') {
    return (
      <Fade when={!handleSubmitLoading} duration={1500} wait={100}>
        <div className={`${styles.resultsContainer} ${styles.salaryArea}`}>
          <div className={styles.numberContainer}>
            <h3 className={`${styles.salaryResultText} ${styles.firstNumber}`}>${activeJob.salaryLow.slice(0, -3)}</h3>
            <p className={styles.rangeDesc}>{activeJob.salaryRangeLowDesc}</p>
          </div>
          <p className={`${styles.salaryResultText} ${styles.salaryDash}`}>&ndash;</p>
          <div className={styles.numberContainer}>
            <h3 className={styles.salaryResultText}>${activeJob.salaryHigh.slice(0, -3)}</h3>
            <p className={styles.rangeDesc}>{activeJob.salaryRangeHighDesc}</p>
          </div>
        </div>
      </Fade>
    );
    } else {
      return (
        isEarlyClick ? (
          <div className={!loading ? `${styles.flicker} ${styles.salaryArea}` : `${styles.salaryArea}`}>
            <h2 className={styles.introText}>Select a position and a location!</h2>
          </div>
        ) : (
        <div className={!loading ? `${styles.textFocusIn} ${styles.salaryArea}` : `${styles.salaryArea}`}>
          <h4 className={styles.introText}>Select both a Job and a Location to see the estimated salary rages.</h4>
        </div>
      ));
    }
};

export default SalaryResults;
