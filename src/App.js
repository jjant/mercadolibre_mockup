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

const mockUpProduct = {
  name: 'Deo Reverse Sombrero Oxford',
  status: 'Nuevo',
  price: '1980',
  sellCount: 1,
  description: 'The scarpe'.repeat(200),
  categories: ['Electronica', 'iPod', 'Reproductores'],
  location: 'Capital Federal',
  imageUrl: 'http://mla-s2-p.mlstatic.com/581315-MLA25209135086_122016-O.jpg',
};

const products = [mockUpProduct, mockUpProduct];
// const products = [];

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
              render={() => <ProductDetail product={mockUpProduct} />}
            />
            <Route
              path="/items"
              render={() => <ResultsScreen products={products}/>}
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
