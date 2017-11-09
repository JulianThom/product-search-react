import React, { Component } from 'react';

class Result extends Component {

  displayPrice = (price) => price/100

  render() {
    return (
      <div className="in-stock">
        <h2>
          <a href={this.props.product.url} target="blank">
            {this.props.product.name}
          </a>
        </h2>
        <p>
          <b>${this.displayPrice(this.props.product.price)}</b>
        </p>
        <p>
          {this.props.product.description}
        </p>
        <p>
          <small>
            <i>{this.props.product.inStock ? "In Stock" : "Not available"}</i>
            </small>
        </p>
        <hr/>
      </div>
    )
  }
}

export default Result
