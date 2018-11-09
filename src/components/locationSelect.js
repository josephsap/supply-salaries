import React from 'react';
import _ from 'lodash';


const LocationSelect = (props) => {

  const uniqueLocations = _.uniqBy(props.initialJobs, function(item) {
    return item.location;
  });

  const locationSelectOptions = uniqueLocations.map((position) => {
    return (
      <option key={position.id} value={position.locationSlug}>{position.location}</option>
    );
  });
  
  return (
    <select onChange={props.controlFunction} value={props.selectedLocationValue}>
      { locationSelectOptions }
    </select>
  );
};

export default LocationSelect;
