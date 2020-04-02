import React, { Fragment } from 'react';
import styles from '../styles/app.module.scss';

const LocationSelect = (props) => {
  const { locations, controlFunction, selectedLocationValue } = props;
  const locationSelectOptions = locations.map((loc) => <option key={loc.locationSlug} value={loc.locationSlug}>{loc.location}</option>);

  return (
    <Fragment>
      <p className={`${styles.inlineBlock} ${styles.dropdownCopy}`}>Should make in</p>
      <div className={`${styles.selectWrapper} ${styles.locWrapper}`}>
        <select onChange={controlFunction} value={selectedLocationValue}>
          <option value="location" defaultValue="location" key="location">
            location
          </option>
          { locationSelectOptions }
        </select>
      </div>
    </Fragment>
  );
};

export default LocationSelect;
