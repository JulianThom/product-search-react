import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {

  state = {
    foundProducts: this.props.products
  }

componentWillReceiveProps = (nextProps) => {
  let foundProducts = nextProps.products.filter(product => {
    return product.name.toLowerCase().match(nextProps.query.toLowerCase()) ||
    product.description.toLowerCase().match(nextProps.query.toLowerCase())
  })
  this.setState ({
    foundProducts: foundProducts
  })
}

  render() {
    return (
      <div className="results">
        {this.state.foundProducts.map(function(product, i) {
          return (
            <Result product={product} key={i} />
          )
        })}

      </div>
    );
  }
}

export default Results;
