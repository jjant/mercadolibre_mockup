import React from 'react';

import Colors from '../constants/Colors';

import SearchIcon from '../assets/ic_Search.png';

const SearchButton = () => (
  <button style={styles.searchButton} type="submit">
    <img src={SearchIcon} />
  </button>
);

const styles = {
  searchButton: {
    width: '40px',
    height: '40px',
    background: Colors.lightGray,
    border: '0',
    borderTopRightRadius: '3px',
    borderBottomRightRadius: '3px',
    border: `1px solid ${Colors.darkGray}`,
    borderLeft: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
};

export default SearchButton;
