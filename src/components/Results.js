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

 inStock = () => {
     this.setState ({
     inStock: true,
     all: false
    })
  }

 notAvailable = () => {
     this.setState ({
     inStock: false,
     all: false
   })
  }

  allProducts = () => {
      this.setState ({
      all: true,
    })
   }

  render() {
    const {foundProducts} = this.state
    const counter = foundProducts.length

    return (
      <div className="results">
        <div>
            <small>
              { this.state.ready && `${counter} product${counter > 1 ? 's' : ''} found` }
            </small>
            <div className="pull-right">
              <button className="btn btn-xs btn-default" onClick={this.allProducts}>
                <span className="glyphicon glyphicon-list" aria-hidden="true"></span> All
              </button>
              <button className="btn btn-xs btn-primary" onClick={this.inStock}>
                <span className="glyphicon glyphicon-check" aria-hidden="true"></span> In stock
              </button>
              <button className="btn btn-xs btn-danger" onClick={this.notAvailable}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Not available
              </button>
            </div>
            <hr/>
        </div>
        {
          foundProducts.map((product, i) => {
            if ( product.inStock == this.state.inStock ) {
              return <Result product={product} key={i} />
            }
            if ( this.state.all ) {
              return <Result product={product} key={i} />
            }
          })
        }
      </div>
    );
  }
}

export default Results;
