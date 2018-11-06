import React from 'react';
import _ from 'lodash';


const PositionSelect = (props) => {

  const uniquePositionNames = _.uniqBy(props.initialJobs, function(item) {
    return item.jobTitle;
  });

  const positionSelectOptions = uniquePositionNames.map((position) => {
    return (
      <option key={position.id} value={position.jobTitle}>{position.jobTitle}</option>
    );
  });

  return (
    <select onChange={props.controlFunction} value={props.selectedPositionValue}>
      { positionSelectOptions }
    </select>
  );
};

export default PositionSelect;


//<select value={this.state.value} onChange={this.handleChange}>