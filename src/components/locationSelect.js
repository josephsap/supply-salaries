import React from 'react';
import styles from '../styles/app.module.scss';

const LocationSelect = (props) => {
  const { locations, controlFunction, selectedLocationValue, isEarlyClick } = props;
  const locationSelectOptions = locations.map((loc) => <option key={loc.locationSlug} value={loc.locationSlug}>{loc.location}</option>);

  return (
    <>
      <p className={`${styles.inlineBlock} ${styles.dropdownCopy}`}>Should make in</p>
      <div className={isEarlyClick ? `${styles.pulsate} ${styles.selectWrapper} ${styles.locWrapper}` : `${styles.selectWrapper} ${styles.locWrapper}`}>
        <select onChange={controlFunction} value={selectedLocationValue}>
          <option value="location" defaultValue="location" key="location">
            location
          </option>
          { locationSelectOptions }
        </select>
      </div>
    </>
  );
};

export default LocationSelect;
