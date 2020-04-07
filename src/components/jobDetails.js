import React, { Component } from 'react';
import styles from '../styles/main.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import '../styles/rangeOverrides.css';

class JobDetails extends Component {
  state = {
    activeSlide: 0,
    value: 0.5
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
          value: current + 0.5
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
          <InputRange
            draggableTrack={true}
            maxValue={6}
            minValue={0}
            step={0.5}
            value={this.state.value}
            classNames={{
              inputRange: 'inputRange',
              labelContainer: 'labelContainer',
              maxLabel: 'maxLabel',
              minLabel: 'minLabel',
              slider: 'slider',
              sliderContainer: 'sliderContainer',
              track: 'trak',
              valueLabel: 'valueLabel'
            }}
            onChange={(value) => {
              let theValue;
              if (value % 1 === 0) {
                theValue = value + 0.5;
              } else {
                theValue = value;
              }
              this.setState({
                value: theValue,
                activeSlide: theValue - 0.5
              });
            }}
          />
        </div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {jobDetailItems}
        </Slider>
      </div>
    );
  };
};

export default JobDetails;
