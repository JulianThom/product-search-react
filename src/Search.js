import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Search.css';

import SearchBar from './components/SearchBar';
import Results from './components/Results';

class Search extends Component {

  state = {
      query: ''
    }

  handleQuery = (queryValue) => {
    this.setState({query: queryValue.toLowerCase().trim()})
    console.log(queryValue);
  }
  render() {
    return (
      <div className="search">
        <SearchBar onQuery={this.handleQuery}/>
        <Results products={this.props.products} query={this.state.query}/>
      </div>
    );
  }
}

export default Search;
