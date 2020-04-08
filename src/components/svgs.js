import React from 'react';
import { useTrail, animated } from 'react-spring';
import styles from '../styles/svgs.module.scss';
import '../styles/svgs.scss';

const SVGConfig = [
  {
    svg: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
      <line fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" x1="28.456" y1="10.141" x2="19.904" y2="45.625"></line>
    </svg>,
    class: 'line1'
  },
  {
    svg: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
      <line fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" x1="28.456" y1="10.141" x2="19.904" y2="45.625"></line>
    </svg>,
    class: 'line2'
  },
  {
    svg: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
      <line fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" x1="28.456" y1="10.141" x2="19.904" y2="45.625"></line>
    </svg>,
    class: 'line3'
  },
  {
    svg: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
      <rect x="10.244" y="12.851" transform="matrix(0.9325 -0.3613 0.3613 0.9325 -8.1715 10.7305)" fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" width="28.74" height="28.74"></rect>
    </svg>,
    class: 'square1'
  },
  {
    svg: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
      <rect x="10.244" y="12.851" transform="matrix(0.9325 -0.3613 0.3613 0.9325 -8.1715 10.7305)" fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" width="28.74" height="28.74"></rect>
    </svg>,
    class: 'square2'
  },
  {
    svg: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
      <polygon fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" points="41.759,35.699 24.404,39.348 
        7.049,42.996 17.419,7.418 "></polygon>
      </svg>,
      class: 'triangle1'
  },
  {
    svg: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
      <polygon fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" points="41.759,35.699 24.404,39.348 
        7.049,42.996 17.419,7.418 "></polygon>
      </svg>,
      class: 'triangle2'
  },
  {
    svg: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
      <line fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" x1="28.456" y1="10.141" x2="19.904" y2="45.625"></line>
    </svg>,
    class: 'line4'
  },
  {
    svg: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
      <line fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" x1="28.456" y1="10.141" x2="19.904" y2="45.625"></line>
    </svg>,
    class: 'line5'
  },
  {
    svg: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
      <rect x="10.244" y="12.851" transform="matrix(0.9325 -0.3613 0.3613 0.9325 -8.1715 10.7305)" fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" width="28.74" height="28.74"></rect>
    </svg>,
    class: 'square3'
  },
  {
    svg: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
      <rect x="10.244" y="12.851" transform="matrix(0.9325 -0.3613 0.3613 0.9325 -8.1715 10.7305)" fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" width="28.74" height="28.74"></rect>
    </svg>,
    class: 'square4'
  },
  {
    svg: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
      <polygon fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" points="41.759,35.699 24.404,39.348 
        7.049,42.996 17.419,7.418 "></polygon>
    </svg>,
    class: 'triangle3'
  },
  {
    svg: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
      <circle fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" cx="25.402" cy="24.902" r="18.402"></circle>
    </svg>,
    class: 'circle1'
  },
  {
    svg: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
      <circle fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" cx="25.402" cy="24.902" r="18.402"></circle>
    </svg>,
    class: 'circle2'
  }
];


const SVGS = ({ loading }) => {
  const trail = useTrail(SVGConfig.length, {
    config: { mass: 1, tension: 200, friction: 24},
    opacity: loading ? 0 : 1,
    from: { opacity: 0 },
  });

  return (
    <div className={styles.svgWrapper}>
      <div className={styles.textCenter}>
        <h1>Industry Salaries</h1>
        <h4 className={styles.subhead}>Thoughts on salary ranges we see in our realm of talent</h4>
      </div>
      {trail.map(({ height, ...rest }, index) => (
        <animated.span
          key={index}
          style={{ ...rest }}
          className={styles[`${SVGConfig[index].class}`]}
        >
          {SVGConfig[index].svg}
        </animated.span>
        )
      )}
    </div>
  );
};

export default SVGS;
// import React, { useState } from 'react';
// import Modal from './modal';
// import '../styles/svgs.scss';


// const SVGS = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <div className="svgWrapper">
//       <svg version="1.1" className="line1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
//       <line fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" x1="28.456" y1="10.141" x2="19.904" y2="45.625"></line>
//       </svg>
//       <svg version="1.1" className="line2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
//       <line fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" x1="28.456" y1="10.141" x2="19.904" y2="45.625"></line>
//       </svg>
//       <svg version="1.1" className="line3" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
//       <line fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" x1="28.456" y1="10.141" x2="19.904" y2="45.625"></line>
//       </svg>


//       <svg version="1.1" className="square1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
//       <rect x="10.244" y="12.851" transform="matrix(0.9325 -0.3613 0.3613 0.9325 -8.1715 10.7305)" fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" width="28.74" height="28.74"></rect>
//       </svg>
//       <svg version="1.1" className="square2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
//       <rect x="10.244" y="12.851" transform="matrix(0.9325 -0.3613 0.3613 0.9325 -8.1715 10.7305)" fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" width="28.74" height="28.74"></rect>
//       </svg>

//       <svg version="1.1" className="triangle1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
//       <polygon fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" points="41.759,35.699 24.404,39.348 
//         7.049,42.996 17.419,7.418 "></polygon>
//       </svg>

//       <svg version="1.1" className="triangle2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
//       <polygon fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" points="41.759,35.699 24.404,39.348 
//         7.049,42.996 17.419,7.418 "></polygon>
//       </svg>

//       <h1 className="text-center">Industry Salaries</h1>
//       <h4 className="text-center subhead">Thoughts on salary ranges we see in our realm of talent</h4>
//       <button className="aboutLink" onClick={() => handleModal()}>About</button>

//       <svg version="1.1" className="line4" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
//       <line fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" x1="28.456" y1="10.141" x2="19.904" y2="45.625"></line>
//       </svg>
//       <svg version="1.1" className="line5" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
//       <line fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" x1="28.456" y1="10.141" x2="19.904" y2="45.625"></line>
//       </svg>

//       <svg version="1.1" className="square3 mobile-show" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
//       <rect x="10.244" y="12.851" transform="matrix(0.9325 -0.3613 0.3613 0.9325 -8.1715 10.7305)" fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" width="28.74" height="28.74"></rect>
//       </svg>
//       <svg version="1.1" className="square4 mobile-show" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
//       <rect x="10.244" y="12.851" transform="matrix(0.9325 -0.3613 0.3613 0.9325 -8.1715 10.7305)" fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" width="28.74" height="28.74"></rect>
//       </svg>

//       <svg version="1.1" className="triangle3 mobile-show" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
//       <polygon fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" points="41.759,35.699 24.404,39.348 
//         7.049,42.996 17.419,7.418 "></polygon>
//       </svg>

//       <svg version="1.1" className="circle1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
//       <circle fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" cx="25.402" cy="24.902" r="18.402"></circle>
//       </svg>

//       <svg version="1.1" className="circle2 mobile-show" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="49.612px" height="52.713px" viewBox="0 0 49.612 52.713" enableBackground="new 0 0 49.612 52.713" xmlSpace="preserve">
//       <circle fill="#f5f6f6" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" cx="25.402" cy="24.902" r="18.402"></circle>
//       </svg>
//       <Modal show={showModal} />
//     </div>
//   );
// };

// export default SVGS;