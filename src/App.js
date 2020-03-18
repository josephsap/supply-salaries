import React, { Component } from 'react';
import _ from 'lodash';
import 'normalize.css'
import styles from './styles/app.module.scss';
import axios from 'axios';
import SVGS from './components/svgs';
import PositionSelect from './components/positionSelect';
import LocationSelect from './components/locationSelect';
import JobDetails from './components/jobDetails';
import SalaryResults from './components/salaryResults';


class App extends Component {

  // http://events.thesupply.com/api/salaries/developer/seattle

  state = {
    loading: true,
    selectedPositionValue: "Position",
    selectedLocationValue: "Location",
    descriptions: [],
    activeIndex: 0,
    sortedJobs: [],
    activeJobItem: null,
    titles: [],
    locations: [],
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
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
    const uniqueJobLevels = _.uniqBy(this.state.descriptions, function(item) {
      return item.jobLevel;
    });

    const sortedBySalaryLow = uniqueJobLevels.sort((a, b) => parseFloat(a.salaryLow) - parseFloat(b.salaryLow));

    this.setState({
      sortedJobs: sortedBySalaryLow
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

  handleSubmit = (e) => {
    e.preventDefault();
    const _this = this;
    axios.get(`https://events.thesupply.com/api/salaries/${this.state.selectedPositionValue}/${this.state.selectedLocationValue}`)
    .then(response => {
      this.setState(function(prevState, props){
        return {
          descriptions: response.data,
          loading: false,
          selectedPositionValue: this.state.selectedPositionValue,
          selectedLocationValue: this.state.selectedLocationValue,
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
      <div className="App">
        <div className="topBar">
          <div className="container">
            <SVGS />
          </div>
        </div>
        { loading && <div>loading@@ </div>}
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
            { this.state.selectedPositionValue !== null && this.state.selectedLocationValue !== null && <button type="submit" value="submit" className={styles.submitBtn}><span>Submit</span></button> }
          </form>
        }
        <div className={styles.jobContainer}>
          <SalaryResults activeJob={this.state.activeJobItem}isLoading={this.state.loading}/>
          <JobDetails
            descriptions={this.state.descriptions}
            handleJobLevelSelect={this.handleJobLevelSelect}
            sortedJobsArr={this.state.sortedJobs}
            activeIndex={this.state.activeIndex}
          />
        </div>
      </div>
    );
  }
}

export default App;
