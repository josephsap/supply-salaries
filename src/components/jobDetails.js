import React, { useState, useRef } from 'react';
import styles from '../styles/main.module.scss';

// render the job descriptions on the bottom
const JobDetails = (props) => {
  const [mousePos, setMousePos] = useState({ x: null, y: null});
  const [dotPos, setDotPos] = useState(null);
  const { sortedJobsArr, activeIndex, handleJobLevelSelect } = props;
  const dotRef = useRef();
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
  };

  const handleDotMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top;  //y position within the element.
    // console.log(rect, x, y);
    console.log(x, dotRef.current)
    setDotPos(x);

  }

  const jobDetailItems = sortedJobsArr.map((jobItem, index) => (
      <li
        onClick={(e) => { handleJobLevelSelect(jobItem, index); handleDotMove(e); }}
        key={jobItem.jobLevel}
        className={`${activeIndex === index ? `${styles.active} ${styles.jobItem}` : `${styles.jobItem}`}`}
        style={itemWidthStyle}
      >
        <span className={styles.dot} ref={dotRef} style={{ left: dotPos }}></span>
        <h3>{jobItem.jobLevel}</h3>
        <p>{jobItem.jobDescription}</p>
      </li>
    ),
  );

  return (
    <ul className={styles.jobDetailItems}>
      {jobDetailItems}
    </ul>
  );
};

export default JobDetails;
