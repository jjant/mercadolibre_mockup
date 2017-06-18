import React, { Component } from 'react';
import logo from './logo.svg';
import SearchBar from './search/SearchBar';
import ProductDetail from './product/ProductDetail';
import Colors from './constants/Colors';
import './App.css';

const mockUpProduct = {
  name: 'Deo Reverse Sombrero Oxford',
  status: 'Nuevo',
  price: '1980',
  sellCount: 234,
  description: 'The scarpe'.repeat(200),
  categories: ['Electronica', 'iPod', 'Reproductores'],
};

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={styles.container}
      >
        <SearchBar />
        <div style={styles.content}>
          <ProductDetail product={mockUpProduct}/>
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
    height: '100%',
    margin: '0 auto',
    padding: '0 20px 50px',
    background: Colors.lightGray,
    boxSizing: 'border-box',
    overflow: 'auto',
  },
};

export default App;
