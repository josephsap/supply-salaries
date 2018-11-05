import React from 'react';


const LocationSelect = (props) => {

  const locationSelectOptions = props.initialJobs.map((position) => {
    return (
      <option key={position.id} value={position.location}>{position.location}</option>
    );
  });
  
  return (
    <select onChange={props.controlFunction} value={props.selectedValue}>
      { locationSelectOptions }
    </select>
  );
};

export default LocationSelect;
