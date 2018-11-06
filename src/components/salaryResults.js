import React from 'react';

const SalaryResults = (props) => {
  console.log(props.selectedJobItem, '987678');
  if(props.selectedJobItem) {
    if(props.selectedJobItem.length !== 0) {
      return (
        <div>should have salary number
          {props.selectedJobItem}
        </div>
      );
    } else {
      return (
        <div>select stuff to see estimated salary numbers</div>
      );
    }
  }
};

export default SalaryResults;
