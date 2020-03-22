import React, { useState } from 'react';
import styles from '../styles/main.module.scss';
import loadingStyles from '../styles/loading.module.scss';
import Banknote from '../icons/banknote.png';


// render the job descriptions on the bottom
const JobDetails = (props) => {
  const { sortedJobsArr, activeIndex, handleJobLevelSelect, loading } = props;
  const [inProp, setInProp] = useState(false);
  // even out the flex items
  let flexItemWidth;
  let itemWidthStyle;

  if(sortedJobsArr.length > 0) {
    flexItemWidth = 100 / sortedJobsArr.length;
  }

  if(window.innerWidth >= 768) {
    itemWidthStyle = {
      flex: '0 0' + flexItemWidth + '%',
      width: flexItemWidth + '%'
    };
  } else {
    itemWidthStyle = {
      flex: '0 0 auto'
    };
  }

  const jobDetailItems = sortedJobsArr.map((jobItem, index) => {

    return (
      <li key={jobItem.jobLevel} onClick={((e) => handleJobLevelSelect(jobItem, index))} className={activeIndex === index ? `${styles.active}` : ''} style={itemWidthStyle}>
        <h3>{jobItem.jobLevel}</h3>
        <p>{jobItem.jobDescription}</p>
      </li>
    );
  });

  return (
    <ul className={styles.jobDetailItems}>
      {loading && 
        <li className={styles.jobsLoading}>
          <img src={Banknote} className={loadingStyles.loadingRotate} />
        </li>
      }
      {!loading && jobDetailItems}
    </ul>
  );

};


export default JobDetails;