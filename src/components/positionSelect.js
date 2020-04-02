import React, { Fragment } from 'react';
import styles from '../styles/app.module.scss';


const PositionSelect = (props) => {
  const { titles, controlFunction, selectedPositionValue } = props;

  const makePositionSelectOptions = titles.map((title) => {
    return (
      <option key={title.id} value={title.slug}>{title.jobTitle}</option>
    );
  });

  return (
    <Fragment>
      <p className={`${styles.inlineBlock} ${styles.dropdownCopy}`}>I'm curious what a</p>
      <div className={`${styles.selectWrapper} ${styles.posWrapper}`}>
        <select onChange={controlFunction} value={selectedPositionValue}>
          <option value="position" key="pos1">Choose a job</option>
          { makePositionSelectOptions }
        </select>
      </div>
    </Fragment>
  );
};

export default PositionSelect;


//<select value={this.state.value} onChange={this.handleChange}>