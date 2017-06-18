import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import SearchBar from './search/SearchBar';
import ProductDetail from './product/ProductDetail';
import Colors from './constants/Colors';
import Dimensions from './constants/Dimensions';
import ResultsScreen from './screens/ResultsScreen';

import './App.css';

const mockUpProduct = {
  name: 'Deo Reverse Sombrero Oxford',
  status: 'Nuevo',
  price: '1980',
  sellCount: 1,
  description: 'The scarpe'.repeat(200),
  categories: ['Electronica', 'iPod', 'Reproductores'],
};

class App extends Component {
  render() {
    return (
      <Router>
        <div
          className="App"
          style={styles.container}
        >
          <SearchBar />
          <div style={styles.content}>
            <Switch>
              <Route
                path="/product/:id"
                render={() => <ProductDetail product={mockUpProduct} />}
              />
              <Route
                path="/results"
                component={ResultsScreen}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const styles = {
  container: {
    height: '100%',
  },
  content: {
    width: '100%',
    height: `calc(100% - ${Dimensions.headerHeight})`,
    margin: '0 auto',
    padding: '0 20px 50px',
    background: Colors.lightGray,
    boxSizing: 'border-box',
    overflow: 'auto',
  },
};

export default App;
