import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PositionSelect from './components/positionSelect';
import LocationSelect from './components/locationSelect';

class App extends Component {

  // http://events.thesupply.com/api/salaries/developer/seattle

  state = {
    loading: true,
    initialJobs: [],
    selectedPositionValue: 'developer',
    selectedLocationValue: 'seattle',
    selectedJobData: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/salaries/')
    .then(response => {
      this.setState({
        initialJobs: response.data,
        loading: false
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handlePositionChange(e) {
    this.setState({selectedPositionValue: e.target.value});
  }

  handleLocationChange(e) {
    this.setState({selectedLocationValue: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3000/api/salaries/${this.state.selectedPositionValue}/${this.state.selectedLocationValue}`)
    .then(response => {
      this.setState({
        jobs: response.data,
        loading: false,
        selectedPositionValue: this.state.selectedPositionValue,
        selectedLocationValue: this.state.selectedLocationValue,
      });
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  render() {
    console.log(this.state)
    const loading = this.state.loading;
    return (
      <div className="App">
        { loading && <div>loading@@ </div>}
        {!loading &&
          <form onSubmit={this.handleSubmit}>
            <PositionSelect 
              { ...this.state } 
              controlFunction={this.handlePositionChange}
            />
            <LocationSelect
              { ...this.state }
              controlFunction={this.handleLocationChange}
            />
            <input type="submit" value="submit" />
          </form>
        }
      </div>
    );
  }
}

export default App;
