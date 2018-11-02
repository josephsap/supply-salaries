import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  // http://events.thesupply.com/api/salaries/developer/seattle

  state = {
    jobTitles: [],
    cities: []
  }

  componentDidMount() {
    axios.get('http://events.thesupply.com/api/salaries/developer/seattle')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
      <div className="App">
        <select>
          <option value="designer">Designer</option>
          <option value="developer">Developer</option>
        </select>
        <select>
          <option value="charlotte">Charlotte</option>
          <option value="seattle">Seattle</option>
        </select>
      </div>
    );
  }
}

export default App;
