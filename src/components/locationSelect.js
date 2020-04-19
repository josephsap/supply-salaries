import React from 'react';
import styles from '../styles/app.module.scss';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const LocationSelect = (props) => {
  const { locations, controlFunction, selectedLocationValue, isEarlyClick } = props;
  const locationSelectOptions = locations.map((loc) => <MenuItem key={loc.locationSlug} value={loc.locationSlug}>{loc.location}</MenuItem>);

  return (
    <>
      <p className={`${styles.inlineBlock} ${styles.dropdownCopy}`}>Should make in</p>
      <div className={isEarlyClick ? `${styles.pulsate} ${styles.selectWrapper} ${styles.locWrapper}` : `${styles.selectWrapper} ${styles.locWrapper}`}>
        <FormControl style={{ width: '200px' }} variant="filled">
          <Select
            labelId="location-select-label"
            id="location-select"
            value={selectedLocationValue}
            onChange={controlFunction}
            IconComponent={ArrowDownwardIcon}
          >
            <MenuItem value="location">
              Location
            </MenuItem>
            {locationSelectOptions}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default LocationSelect;
