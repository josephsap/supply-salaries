import React from 'react';

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
        <p>select stuff to see estimated salary numbers</p>
      );
    }
};

export default SalaryResults;
