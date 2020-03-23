import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import styles from '../styles/main.module.scss';
import loadingStyles from '../styles/loading.module.scss';
import Banknote from '../icons/banknote.png';

// render the job descriptions on the bottom
const JobDetails = (props) => {
  const [doneAnimating, setDoneAnimating] = useState(false);
  const animatedItems = [];
  const { sortedJobsArr, activeIndex, handleJobLevelSelect, loading } = props;
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(sortedJobsArr.length, {
    config,
    opacity: loading ? 0 : 1,
    x: loading ? 50 : 0,
    from: { opacity: 0, x: 80 },
    // onRest: (item) => {
    //   animatedItems.push(item);
    //   if (animatedItems.length === sortedJobsArr.length) {
    //     setDoneAnimating(true);
    //   }
    // }
  });

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

  const jobDetailItems = trail.map(({ x, height, ...rest }, index) => {
    return (
      <animated.li
        onClick={((e) => handleJobLevelSelect(sortedJobsArr[index], index))}
        key={sortedJobsArr[index].jobLevel}
        className={`${activeIndex === index ? `${styles.active}` : ''}`}
        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`), ...itemWidthStyle }}>
          <h3>{sortedJobsArr[index].jobLevel}</h3>
          <p>{sortedJobsArr[index].jobDescription}</p>
      </animated.li>
    );
  });

  return (
    <ul className={styles.jobDetailItems} key={Math.random()}>
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
