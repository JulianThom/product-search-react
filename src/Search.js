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

  timeout = null

  componentDidMount = () => {
    axios.get('http://localhost:3000/products')
    .then(response => {
      this.setState({data: response.data})
    })
  }

  handleQuery = (queryValue) => {

    clearTimeout(this.timeout)

    const thisQueryValue = queryValue

    this.timeout = setTimeout(() => {
      if ( thisQueryValue.length >= 3 || thisQueryValue.length === 0 ) {
        this.setState({
          query: thisQueryValue.toLowerCase().trim()
        })
      }
    }, 500);
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
