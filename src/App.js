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
    initialJobs: [],
    selectedPositionValue: "Position",
    selectedLocationValue: "Location",
    selectedJobData: [],
    activeIndex: 0,
    sortedJobs: [],
    activeJobItem: null
  }

  componentDidMount() {
    axios.get('https://events.thesupply.com/api/salaries/')
    .then(response => {
      this.setState({
        initialJobs: response.data,
        loading: false
      }, () => {
        this.sortJobsLowToHigh();
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  sortJobsLowToHigh() {
    const uniqueJobLevels = _.uniqBy(this.state.initialJobs, function(item) {
      return item.jobLevel;
    });

    const sortedBySalaryLow = uniqueJobLevels.sort((a, b) => parseFloat(a.salaryLow) - parseFloat(b.salaryLow));

    this.setState({
      sortedJobs: sortedBySalaryLow
    });
  }

  handleJobLevelSelect = (item, index) => {

    const clickedJobLevel = this.state.selectedJobData.find((selectedJob) => {
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

  // getJob = () => {

  //   // makes the job with the lowest salary active on submit
  //   const poorJob = this.state.selectedJobData.sort((a, b) => parseFloat(a.salaryLow) - parseFloat(b.salaryLow));
  //   this.setState({
  //     activeIndex: this.state.activeIndex
  //   });
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://events.thesupply.com/api/salaries/${this.state.selectedPositionValue}/${this.state.selectedLocationValue}`)
    .then(response => {
      this.setState(function(prevState, props){
        return {
          selectedJobData: response.data,
          loading: false,
          selectedPositionValue: this.state.selectedPositionValue,
          selectedLocationValue: this.state.selectedLocationValue,
        }
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
              { ...this.state }
              controlFunction={this.handlePositionChange}
            />
            <LocationSelect
              { ...this.state }
              controlFunction={this.handleLocationChange}
            />
            { this.state.selectedPositionValue !== null && this.state.selectedLocationValue !== null && <button type="submit" value="submit" className={styles.submitBtn}><span>Submit</span></button> }
          </form>
        }
        <div className={styles.jobContainer}>
          <SalaryResults activeJob={this.state.activeJobItem}isLoading={this.state.loading}/>
          <JobDetails jobItemDescriptions={this.state.initialJobs} handleJobLevelSelect={this.handleJobLevelSelect} sortedJobsArr={this.state.sortedJobs} activeIndex={this.state.activeIndex}/>
        </div>
      </div>
    );
  }
}

export default App;
