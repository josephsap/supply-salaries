import React from 'react';
import _ from 'lodash';


// render the job descriptions on the bottom
const JobDetails = ({ jobItemDescriptions }) => {

  const uniqueJobLevels = _.uniqBy(jobItemDescriptions, function(item) {
    return item.jobLevel;
  });

  const jobDetailItems = uniqueJobLevels.map((jobItem) => {
    return (
      <li key={jobItem.id}>
        <h3>{jobItem.jobLevel}</h3>
        <p>{jobItem.jobDescription}</p>
      </li>
    );
  });

  return (
    <ul>{jobDetailItems}</ul>
  );
};


export default JobDetails;