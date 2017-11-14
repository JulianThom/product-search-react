import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foundProducts: this.props.products,
      ready: false
    };
  }

  componentWillReceiveProps = (nextProps) => {
   const foundProducts = nextProps.products.filter(product => {
     return product.name.toLowerCase().match(nextProps.query.toLowerCase()) ||
     product.description.toLowerCase().match(nextProps.query.toLowerCase())
   })
   this.setState ({
     foundProducts: foundProducts,
     ready: true
   })
 }

  render() {

    const {
      foundProducts
    } = this.state

    const counter = foundProducts.length

    return (
      <div className="results">
        <br/>
        <div>
            <small>
              { this.state.ready && `${counter} product${counter > 1 ? 's' : ''} found` }
            </small>
        </div>
        {
          foundProducts.map((product, i) => {
            return (
              <Result product={product} key={i} />
            )
          })
        }
      </div>
    );
  }
}

export default Results;
