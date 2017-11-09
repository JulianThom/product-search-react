import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './Search';
import registerServiceWorker from './registerServiceWorker';
let products = require('./product.js')

ReactDOM.render(<Search products={products}/>, document.getElementById('app'));
registerServiceWorker();
