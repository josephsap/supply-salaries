import React from 'react';
import styles from '../styles/main.module.scss';


// render the job descriptions on the bottom
const JobDetails = (props) => {
  
  // even out the flex items
  let flexItemWidth;
  let itemWidthStyle;

  if(props.sortedJobsArr.length > 0) {
    flexItemWidth = 100 / props.sortedJobsArr.length;
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


  const jobDetailItems = props.sortedJobsArr.map((jobItem, index) => {

    return (
      <li key={jobItem.id} onClick={((e) => props.handleJobLevelSelect(jobItem, index))} className={props.activeIndex === index ? `${styles.active}` : ''} style={itemWidthStyle}>
        <h3>{jobItem.jobLevel}</h3>
        <p>{jobItem.jobDescription}</p>
      </li>
    );
  });

  return (
    <ul className={styles.jobDetailItems}>{jobDetailItems}</ul>
  );

};


export default JobDetails;