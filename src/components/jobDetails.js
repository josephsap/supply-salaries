import React, { Component } from 'react';
import styles from '../styles/main.module.scss';
// import MoneyStack from '../icons/money-stack.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class JobDetails extends Component {
  state = {
    activeSlide: 0
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      focusOnSelect: true,
      speed: 150,
      slidesToShow: 6,
      slidesToScroll: 1,
      afterChange: (current) => {
        this.setState({
          activeSlide: current,
        }, () => {
          this.props.handleJobLevelSelect(this.state.activeSlide);
        });
      },
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const jobDetailItems = this.props.sortedJobsArr.map((jobItem, index) => (
      <div
        key={jobItem.jobLevel}
        className={`${this.props.activeIndex === index ? `${styles.active} ${styles.jobItem}` : `${styles.jobItem}`}`}
      >
        <h3>{jobItem.jobLevel}</h3>
        <p>{jobItem.jobDescription}</p>
      </div>
    ),
    );

    return (
      <div>
        <div className={styles.slider}>
          <input
            onChange={e => {
              let num = e.target.value;
              if (num % 1 !== 0) {
                num = Math.floor(num);
              }
              this.slider.slickGoTo(num);
            }}
            value={this.state.activeSlide + 0.5}
            type="range"
            min={0}
            max={6}
            step={0.5}
            className={styles.inputSlider}
          />
          {/* <div className={styles.dotWrap} value={activeSlide}>
          <img src={MoneyStack} alt="money" className={styles.moneyStackImage} />
          <span className={styles.dot}></span>
        </div> */}
        </div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {jobDetailItems}
        </Slider>
      </div>
    );
  };
};

export default JobDetails;
