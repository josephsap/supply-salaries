import React, { forwardRef, useState } from 'react';
import { useTrail, useSpring, animated } from 'react-spring';
import styles from '../styles/svgs.module.scss';
import '../styles/svgs.scss';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const SVGS = ({ loading }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <button type="button" onClick={handleOpen} className={styles.modalButton}>About</button>
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
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={styles.modalStyles}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">Shaz what should this say?</h2>
            <p id="spring-modal-description">And what should it look like?</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default SVGS;
