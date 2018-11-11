import React, { Fragment } from 'react';
import _ from 'lodash';
import styles from '../styles/app.module.scss';


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
    <Fragment>
      <p className={styles.inlineBlock}>Should make in</p>
      <select onChange={props.controlFunction} value={props.selectedLocationValue}>
        <option defaultValue="location" selected disabled hidden>
          Location
        </option>
        { locationSelectOptions }
      </select>
    </Fragment>
  );
};

export default LocationSelect;
