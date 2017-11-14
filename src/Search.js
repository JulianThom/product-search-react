import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Search.css';

import SearchBar from './components/SearchBar';
import Results from './components/Results';
import axios from 'axios';

class Search extends Component {

  state = {
      query: '',
      data: []
    }

  componentDidMount = () => {
    axios.get('http://localhost:3000/products')
    .then(response => {
      this.setState({data: response.data})
    })
  }

  handleQuery = (queryValue) => {
    this.setState({query: queryValue.toLowerCase().trim()})
  }

  render() {
    return (
      <div className="search">
        <SearchBar onQuery={this.handleQuery}/>
        <Results products={this.state.data} query={this.state.query}/>
      </div>
    );
  }
}

export default Search;
