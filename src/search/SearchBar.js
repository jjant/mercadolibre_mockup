import React from 'react';
import Colors from '../constants/Colors';

import SearchIcon from '../assets/ic_Search.png';
import Logo from '../assets/Logo_ML.png';

const SearchBar = () => (
  <div style={styles.container}>
    <img
      src={Logo}
      style={styles.logo}
    />
    <div style={styles.textBoxContainer}>
      <input
        style={styles.textBox}
        type="text"
        placeholder="Nunca dejes de buscar"
      />
      <button style={styles.searchButton}>
        <img src={SearchIcon} />
      </button>
    </div>
  </div>
);

const styles = {
  container: {
    width: '100%',
    height: '55px',
    padding: '0 30px',
    background: Colors.yellow,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  textBoxContainer: {
    width: '100%',
    maxWidth: '900px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '30px',
  },
  textBox: {
    fontSize: '18px',
    height: '40px',
    width: '100%',
    maxWidth: '800px',
    padding: '0 10px',
    border: '0',
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
  },
  searchButton: {
    width: '40px',
    height: '40px',
    background: Colors.lightGray,
    border: '0',
    borderTopRightRadius: '3px',
    borderBottomRightRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }
};

export default SearchBar;
