import React, { Component } from 'react';
import _ from 'lodash';
import 'normalize.css'
import styles from './styles/app.module.scss';
import loadingStyles from './styles/loading.module.scss';
import svgStyles from './styles/svgs.module.scss';
import axios from 'axios';
import SVGS from './components/svgs';
import Banknote from './icons/banknote.png';
import PositionSelect from './components/positionSelect';
import LocationSelect from './components/locationSelect';
import JobDetails from './components/jobDetails';
import SalaryResults from './components/salaryResults';


class App extends Component {

  // http://events.thesupply.com/api/salaries/developer/seattle

  state = {
    loading: true,
    selectedPositionValue: "position",
    selectedLocationValue: "location",
    descriptions: [],
    activeIndex: 0,
    sortedJobs: [],
    activeJobItem: null,
    titles: [],
    locations: [],
  }

  componentDidMount() {
    function getTitles() {
      return axios.get('https://events.thesupply.com/api/salaries/titles');
    }
    
    function getLocations() {
      return axios.get('https://events.thesupply.com/api/salaries/locations');
    }
    
    function getDefaultDescriptions() {
      return axios.get('https://events.thesupply.com/api/salaries/digital-producer');
    }

    let _this = this;
    axios.all([getTitles(), getLocations(), getDefaultDescriptions()])
      .then(axios.spread(function (titles, locations, descriptions) {
        _this.setState({
          titles: titles.data,
          locations: locations.data,
          descriptions: descriptions.data,
          loading: false
        }, () => {
          if (!_this.state.loading) {
            _this.sortJobsLowToHigh();
          }
        });
      })
    );
  }

  sortJobsLowToHigh() {
    const _this = this;
    const uniqueJobLevels = _.uniqBy(this.state.descriptions, function(item) {
      return item.jobLevel;
    });

    const sortedBySalaryLow = uniqueJobLevels.sort((a, b) => parseFloat(a.salaryLow) - parseFloat(b.salaryLow));

    this.setState({
      sortedJobs: sortedBySalaryLow
    }, () => {
      _this.setActiveSalaryRange();
    });
  }

  handleJobLevelSelect = (item, index) => {
    const clickedJobLevel = this.state.descriptions.find((selectedJob) => {
      return selectedJob.jobLevel === item.jobLevel;
    });

    this.setState({
      activeIndex: index,
      activeJobItem: clickedJobLevel
    });
  }

  handlePositionChange = (e) => {
    this.setState({selectedPositionValue: e.target.value});
  }

  handleLocationChange = (e) => {
    this.setState({selectedLocationValue: e.target.value});
  }

  setActiveSalaryRange() {
    if (this.state.selectedPositionValue === 'position' && this.state.selectedLocationValue === 'location' && this.state.activeIndex === 0) {
      this.setState({
        activeJobItem: null
      });
    } else {
      this.setState({
        activeJobItem: this.state.sortedJobs[this.state.activeIndex]
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({
    //   loading: true
    // });
    const _this = this;
    axios.get(`https://events.thesupply.com/api/salaries/${this.state.selectedPositionValue}/${this.state.selectedLocationValue}`)
    .then(response => {
      this.setState(function(prevState, props){
        return {
          descriptions: response.data,
          selectedPositionValue: this.state.selectedPositionValue,
          selectedLocationValue: this.state.selectedLocationValue,
          activeIndex: this.state.activeIndex || 0,
          loading: false
        }
      }, () => {
        _this.sortJobsLowToHigh();
      });
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  render() {
    const loading = this.state.loading;
    return (
      <div className={!loading ? `${styles.fadeStuff} ${styles.selectsWrapper}` : `${styles.selectsWrapper}`}>
        <div className={svgStyles.topBar}>
          <div className={svgStyles.container}>
            <SVGS loading={loading} />
          </div>
        </div>
        { loading &&
          <form onSubmit={this.handleSubmit} className={styles.textCenter}>
            <img src={Banknote} className={loadingStyles.loadingRotate} />
          </form>
        }
        {!loading &&
          <form onSubmit={this.handleSubmit} className={styles.textCenter}>
            <PositionSelect 
              titles={this.state.titles}
              controlFunction={this.handlePositionChange}
            />
            <LocationSelect
              locations={this.state.locations}
              controlFunction={this.handleLocationChange}
            />
          {this.state.selectedPositionValue !== 'position' && this.state.selectedLocationValue !== 'location' ? (
            <button type="submit" value="submit" className={styles.submitBtn}><span>Submit</span></button>
          ) : (
            <button type="submit" disabled value="submit" className={`${styles.submitBtn} ${styles.disabledButton}`}><span>Submit</span></button>
          )
          }
          </form>
        }
        <div className={loading ? `${styles.jobContainer}` : `${styles.jobContainer} ${styles.fadeStuff}`}>
          <SalaryResults
            activeJob={this.state.activeJobItem}
            loading={loading}
            posVal={this.state.selectedPositionValue}
            locVal={this.state.selectedLocationValue}
          />
          <JobDetails
            handleJobLevelSelect={this.handleJobLevelSelect}
            sortedJobsArr={this.state.sortedJobs}
            activeIndex={this.state.activeIndex}
            loading={loading}
          />
        </div>
      </div>
    );
  }
}

export default App;
