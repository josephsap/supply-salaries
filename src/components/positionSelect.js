import React from 'react';
import styles from '../styles/app.module.scss';


const PositionSelect = (props) => {
  const { titles, controlFunction, selectedPositionValue, isEarlyClick } = props;

  const makePositionSelectOptions = titles.map((title) => {
    return (
      <option key={title.id} value={title.slug}>{title.jobTitle}</option>
    );
  });

  return (
      <>
        <p className={`${styles.inlineBlock} ${styles.dropdownCopy}`}>I'm curious what a</p>
        <div className={isEarlyClick ? `${styles.pulsate} ${styles.selectWrapper} ${styles.posWrapper}` : `${styles.selectWrapper} ${styles.posWrapper}`}>
          <select onChange={controlFunction} value={selectedPositionValue}>
            <option value="position" key="pos1">Choose a job</option>
            {makePositionSelectOptions}
          </select>
        </div>
      </>
  );
};

export default PositionSelect;
