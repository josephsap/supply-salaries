import React, { Component } from 'react';
import axios from 'axios';

const withDataFetching = (WrappedComponent) => {
  class WithDataFetching extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        locations: [],
        titles: [],
        descriptions: []
      };
    }

    async componentDidMount() {
      const locsArr = [];
      const titlesArr = [];
      const descriptionsArr = [];
      const results = await axios.get('https://5fc996973c1c220016440d3f.mockapi.io/salaries');
      results.data.map(item => {
        titlesArr.push({
          id: item.id,
          title: item.jobTitle,
          slug: item.slug,
        });
        locsArr.push({
          id: item.id,
          location: item.location,
          locationSlug: item.locationSlug,
        });
        descriptionsArr.push({
          id: item.id,
          slug: item.slug,
          jobTitle: item.jobTitle,
          jobLevel: item.jobLevel,
          location: item.location,
          salaryLow: item.salaryLow,
          salaryHigh: item.salaryHigh,
          salaryRangeLowDesc: item.salaryRangeLowDesc,
          salaryRangeHighDesc: item.salaryRangeHighDesc,
          locationSlug: item.locationSlug,
          jobDescription: item.jobDescription
        });
      });

      return this.setState({
        titles: titlesArr,
        locations: locsArr,
        descriptions: descriptionsArr,
        loading: false
      });
    }

    render() {
      return (
        <WrappedComponent
          loading={this.state.loading}
          titles={this.state.titles}
          descriptions={this.state.descriptions}
          locations={this.state.locations}
        />
      );
    }
  }
    
  WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`;

  return WithDataFetching;

};

export default withDataFetching;
