import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import SearchBar from './search/SearchBar';
import ProductDetail from './product/ProductDetail';
import Colors from './constants/Colors';
import Dimensions from './constants/Dimensions';
import ResultsScreen from './screens/ResultsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={styles.container}
      >
        <SearchBar />
        <div style={styles.content}>
          <Switch>
            <Route
              path="/product/:id"
              component={ProductDetailScreen}
            />
            <Route
              path="/items"
              component={ResultsScreen}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100%',
  },
  content: {
    width: '100%',
    minHeight: `calc(100% - ${Dimensions.headerHeight})`,
    margin: '0 auto',
    padding: '16px 20px 50px',
    background: Colors.lightGray,
    boxSizing: 'border-box',
    overflow: 'auto',
  },
};

export default App;
