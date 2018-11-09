import React from 'react';
import './main.css';


// render the job descriptions on the bottom
const JobDetails = (props) => {

  const jobDetailItems = props.sortedJobsArr.map((jobItem, index) => {
    return (
      <li key={jobItem.id} onClick={((e) => props.handleJobLevelSelect(jobItem, index))} className={props.activeIndex === index ? 'active' : ''}>
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