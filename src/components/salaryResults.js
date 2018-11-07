import React from 'react';
import _ from 'lodash';

const SalaryResults = (props) => {
  if(props.activeJob) {
    return (
      <div>
        {props.activeJob.salaryLow} - 
        {props.activeJob.salaryHigh}
      </div>
    );
    } else {
      return (
        <div>select stuff to see estimated salary numbers</div>
      );
    }
};

export default SalaryResults;
