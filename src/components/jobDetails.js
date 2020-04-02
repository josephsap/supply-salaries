import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from '../styles/main.module.scss';
import MoneyStack from '../icons/money-stack.png';

// render the job descriptions on the bottom
const JobDetails = (props) => {
  const [dotPos, setDotPos] = useState(null);
  const [sliderLeftPos, setSliderLeftPos] = useState(null);
  const { sortedJobsArr, activeIndex, handleJobLevelSelect, posVal, locVal, activeJobItem } = props;
  const dotRef = useRef();
  // even out the flex items
  let flexItemWidth;
  let itemWidthStyle;
  let initialSliderLeftPos;
  let midPos;


  const setItemWidths = () => {
    if (sortedJobsArr.length > 0) {
      flexItemWidth = 100 / sortedJobsArr.length;
    }

    if (window.innerWidth >= 768) {
      itemWidthStyle = {
        flex: '0 0' + flexItemWidth + '%',
        width: flexItemWidth + '%'
      };
    } else {
      itemWidthStyle = {
        flex: '0 0 auto'
      };
    };
  };

  useEffect(() => {
    setItemWidths();
  }, [setItemWidths]);

  const sliderRef = useCallback(node => {
    if (node !== null) {
      const rect = node.getBoundingClientRect();
      initialSliderLeftPos = rect.left;
      setSliderLeftPos(rect.left);
    }
  }, []);

  const initialJobLevelRef = useCallback((jobItem, slider) => {
    if (jobItem !== null) {
      const rect = jobItem.getBoundingClientRect();
      midPos = rect.left + (rect.width / 2);
      setDotPos((midPos - initialSliderLeftPos) - 18);
    }
  }, []);

  const handleDotMove = (e) => {
    if (activeJobItem && posVal !== 'position' && locVal !== 'location') {
      if (e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const midPos = rect.left + (rect.width / 2);
        setDotPos((midPos - sliderLeftPos) - 18);
      } 
    }
  }

  const jobDetailItems = sortedJobsArr.map((jobItem, index) => (
      <li
        onClick={(e) => { handleJobLevelSelect(jobItem, index); handleDotMove(e, dotPos); }}
        key={jobItem.jobLevel}
        className={`${activeIndex === index ? `${styles.active} ${styles.jobItem}` : `${styles.jobItem}`}`}
        style={itemWidthStyle}
        ref={index === 0 ? initialJobLevelRef : null}
      >
        <h3>{jobItem.jobLevel}</h3>
        <p>{jobItem.jobDescription}</p>
      </li>
    ),
  );

  return (
    <div>
      <div className={styles.slider} ref={sliderRef}>
        <div className={styles.dotWrap} ref={dotRef} style={{ left: dotPos }}>
          <img src={MoneyStack} alt="money" className={styles.moneyStackImage} />
          <span className={styles.dot}></span>
        </div>
      </div>
      <ul className={styles.jobDetailItems}>
        {jobDetailItems}
      </ul>
    </div>
  );
};

export default JobDetails;
