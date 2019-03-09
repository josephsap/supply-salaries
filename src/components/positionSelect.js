import React, { Fragment } from 'react';
import _ from 'lodash';
import styles from '../styles/app.module.scss';


const PositionSelect = (props) => {

  const uniquePositionNames = _.uniqBy(props.initialJobs, function(item) {
    return item.jobTitle;
  });

  const makePositionSelectOptions = uniquePositionNames.map((position) => {
    return (
      <option key={position.id} value={position.slug}>{position.jobTitle}</option>
    );
  });

  return (
    <Fragment>
      <p className={styles.inlineBlock}>I'm curious what a</p>
      <div className={styles.selectWrapper}>
        <select onChange={props.controlFunction} value={props.selectedPositionValue}>
          <option value=" ">Choose a job</option>
          { makePositionSelectOptions }
        </select>
      </div>
    </Fragment>
  );
};

export default PositionSelect;


//<select value={this.state.value} onChange={this.handleChange}>