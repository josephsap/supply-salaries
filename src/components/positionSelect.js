import React from 'react';
import styles from '../styles/app.module.scss';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const PositionSelect = (props) => {
  const { titles, controlFunction, selectedPositionValue, isEarlyClick } = props;

  const makePositionSelectOptions = titles.map((title) => {
    return (
      <MenuItem key={title.id} value={title.slug}>{title.jobTitle}</MenuItem>
    );
  });

  return (
      <>
        <p className={`${styles.inlineBlock} ${styles.dropdownCopy}`}>I'm curious what a</p>
        <div className={isEarlyClick ? `${styles.pulsate} ${styles.selectWrapper} ${styles.posWrapper}` : `${styles.selectWrapper} ${styles.posWrapper}`}>
        <FormControl style={{ width: '200px' }} variant="filled">
          <Select
            labelId="position-select-label"
            id="position-select"
            value={selectedPositionValue}
            onChange={controlFunction}
            IconComponent={ArrowDownwardIcon}
          >
            <MenuItem value="position">
              Choose a Job
            </MenuItem>
            {makePositionSelectOptions}
          </Select>
        </FormControl>
        </div>
      </>
  );
};

export default PositionSelect;
