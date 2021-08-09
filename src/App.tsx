import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProdectDetail';

const App: React.FC = () => {
  return <div>
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={ProductListing} />
        <Route path='/product/:productId' exact component={ProductDetail} />
        <Route> 404 Not Found!</Route>
      </Switch>
    </Router>

  </div>
}
export default App;
