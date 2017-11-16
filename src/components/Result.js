import React, { Component } from 'react';

class Result extends Component {

  displayPrice = (price) => price/100
  render() {
    const {product} = this.props

    return (
      <div className="in-stock">
        <h2>
          <a href={ product.url } target="blank">
            { product.name }
          </a>
        </h2>
        <p>
          <b>${ this.displayPrice(product.price) }</b>
        </p>
        <p>
          { product.description }
        </p>
        <p>
          <small>
            <i>{ product.inStock ? "In Stock" : "Not available" }</i>
            </small>
        </p>
        <hr/>
      </div>
    )
  }
}

export default Result
