import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from '../src/components/Login/Main';
import Productlist from '../src/components/ProductList/Productlist'
import Productdetails from '../src/components/productdetails/Productdetails'

ReactDOM.render(
  <Router>
    <div>
      <main>
        <Route exact path="/" component={Main} />
        <Route path="/productlist" component={Productlist} />
        {/* <Route path="/analytics" component={Analytics}/> */}
        <Route path="/productsdetails/:id" component={ Productdetails } />
      </main>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
