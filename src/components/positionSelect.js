import React from 'react';


const PositionSelect = (props) => {

  const positionSelectOptions = props.initialJobs.map((position) => {
    return (
      <option key={position.id} value={position.jobTitle}>{position.jobTitle}</option>
    );
  });

  return (
    <select onChange={props.controlFunction} value={props.selectedValue}>
      { positionSelectOptions }
    </select>
  );
};

export default PositionSelect;


//<select value={this.state.value} onChange={this.handleChange}>