import React, { useState, useEffect } from 'react';
import 'normalize.css'
import axios from 'axios';
import styles from './styles/app.module.scss';
import SVGS from './components/svgs';
import PositionSelect from './components/positionSelect';
import LocationSelect from './components/locationSelect';
import JobDetails from './components/jobDetails';
import SalaryResults from './components/salaryResults';
import withDataFetching from './components/withDataFetching';
import LoadingScreen from './components/loadingScreen';


const App = (props) => {
  const { loading, titles, locations } = props;
  const [sortedJobs, setSortedJobs] = useState([]);
  const [selectedPositionValue, setSelectedPositionValue] = useState('position');
  const [selectedLocationValue, setSelectedLocationValue] = useState('location');
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeJobItem, setActiveJobItem] = useState(null);
  const [descriptions, setDescriptions] = useState([]);
  const [handleSubmitLoading, setHandleSubmitLoading] = useState(false);

  const handleJobLevelSelect = (item, index) => {
    const clickedJobLevel = descriptions.find((selectedJob) => {
      return selectedJob.jobLevel === item.jobLevel;
    });

    if (activeJobItem && selectedPositionValue !== 'position' && selectedLocationValue !== 'location') {
      setActiveIndex(index);
      setActiveJobItem(clickedJobLevel);
    }
  }

  const handlePositionChange = (e) => {
    setSelectedPositionValue(e.target.value);
  }

  const handleLocationChange = (e) => {
    setSelectedLocationValue(e.target.value);
  }

  const setActiveSalaryRange = () => {
    if (selectedPositionValue === 'position' && selectedLocationValue === 'location' && activeIndex === 0) {
      setActiveJobItem(null);
    } else {
      setActiveJobItem(sortedJobs[activeIndex]);
    }
  };

  const sortJobsLowToHigh = () => {
    const sortedBySalaryLow = descriptions.sort((a, b) => parseFloat(a.salaryLow) - parseFloat(b.salaryLow));
    if (!handleSubmitLoading) {
      setSortedJobs(sortedBySalaryLow);
    }
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    setHandleSubmitLoading(true);
    axios.get(`https://events.thesupply.com/api/salaries/${selectedPositionValue}/${selectedLocationValue}`)
    .then(response => {
      setDescriptions(response.data);
      setActiveIndex(activeIndex || 0);
      setSelectedPositionValue(selectedPositionValue);
      setSelectedLocationValue(selectedLocationValue);
      sortJobsLowToHigh();
      setHandleSubmitLoading(false);
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  useEffect(() => {
    if (sortedJobs.length === 0) {
      setDescriptions(props.descriptions);
    } else {
      setDescriptions(descriptions);
    }
    sortJobsLowToHigh();
    setActiveSalaryRange();
  }, [loading, descriptions, handleSubmitLoading, sortedJobs]);
  
  return (
    <>
      {loading
        ? <LoadingScreen loading={props.loading} />
        : (<div className={styles.app}>
            <div className="topBar">
              <div className="container">
                <SVGS />
              </div>
            </div>
            <form onSubmit={handleSubmit} className={`${styles.textCenter} ${styles.contain}`}>
              <PositionSelect 
                titles={titles}
                controlFunction={handlePositionChange}
              />
              <LocationSelect
                locations={locations}
                controlFunction={handleLocationChange}
              />
            {selectedPositionValue !== 'position' && selectedLocationValue !== 'location' ? (
              <button type="submit" value="submit" className={styles.submitBtn}><span>Submit</span></button>
            ) : (
              <button type="submit" disabled value="submit" className={`${styles.submitBtn} ${styles.disabledButton}`}><span>Submit</span></button>
            )
            }
            </form>
            <div className={`${styles.jobContainer} ${styles.contain}`}>
              <SalaryResults
                activeJob={activeJobItem}
                handleSubmitLoading={handleSubmitLoading}
                posVal={selectedPositionValue}
                locVal={selectedLocationValue}
              />
              <JobDetails
                handleJobLevelSelect={handleJobLevelSelect}
                sortedJobsArr={sortedJobs}
                activeIndex={activeIndex}
                posVal={selectedPositionValue}
                locVal={selectedLocationValue}
                activeJobItem={activeJobItem}
              />
            </div>
          </div>
        )
      }
    </>
  );
}

export default withDataFetching(App);
