import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foundProducts: this.props.products,
      ready: false,
    };
  }

  componentWillReceiveProps = (nextProps) => {
   const foundProducts = nextProps.products.filter(product => {
     return product.name.toLowerCase().match(nextProps.query.toLowerCase()) ||
     product.description.toLowerCase().match(nextProps.query.toLowerCase())
   })
   this.setState ({
     foundProducts: foundProducts,
     ready: true,
     all: true
   })
 }

 updateFilter = (filter) => {
   this.setState({
     inStock: false,
     notAvailable: false,
     all: false,
     ...filter
   })
 }


  render() {
    const {foundProducts, ready, inStock, all} = this.state
    const counter = foundProducts.length

    return (
      <div className="results">
        <div>
            <small>
              { ready && `${counter} product${counter > 1 ? 's' : ''} found` }
            </small>
            <div className="pull-right">
              <button
                className="btn btn-xs btn-default"
                onClick={ () => this.updateFilter({ all: true })}>
                <span className="glyphicon glyphicon-list" aria-hidden="true"></span>
                  All
              </button>
              <button
                className="btn btn-xs btn-primary"
                onClick={() => this.updateFilter({ inStock: true })}>
                <span className="glyphicon glyphicon-check" aria-hidden="true"></span>
                  In stock
              </button>
              <button
                className="btn btn-xs btn-danger"
                onClick={() => this.updateFilter({ notAvailable: true })}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  Not available
              </button>
            </div>
            <hr/>
        </div>
        {
          foundProducts.map((product, i) => {
            return (
              <div key={ i }>
                { product.inStock === inStock && <Result product={product} /> }
                { all && <Result product={product} /> }
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Results;
