import React from 'react';
import './main.css';


// render the job descriptions on the bottom
const JobDetails = (props) => {
  
  // even out the flex items
  let flexItemWidth;

  if(props.sortedJobsArr.length > 0) {
    flexItemWidth = 100 / props.sortedJobsArr.length;
  }

  let itemWidthStyle = {
    flex: '0 0 auto',
    width: flexItemWidth + '%'
  };

  if(window.innerWidth >= 768) {
    itemWidthStyle = {
      flex: '0 0' + flexItemWidth + '%',
      width: flexItemWidth + '%'
    };
  }


  const jobDetailItems = props.sortedJobsArr.map((jobItem, index) => {
    console.log(flexItemWidth)
    return (
      <li key={jobItem.id} onClick={((e) => props.handleJobLevelSelect(jobItem, index))} className={props.activeIndex === index ? 'active' : ''} style={itemWidthStyle}>
        <h3>{jobItem.jobLevel}</h3>
        <p>{jobItem.jobDescription}</p>
      </li>
    );
  });

  return (
    <ul className="jobDetailItems">{jobDetailItems}</ul>
  );

};


export default JobDetails;