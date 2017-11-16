import React, { Component } from 'react';

class SearchBar extends Component {

  handleQuery = (e) => this.props.onQuery(e.target.value);

  render() {
    return (
      <div className="search-bar">
        <input className="form-control" onChange={this.handleQuery} placeholder="Search a product (min. 3 characters)" />
      </div>
    );
  }
}

export default SearchBar;
