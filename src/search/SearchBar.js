import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { push } from 'react-router-redux';

import Colors from '../constants/Colors';
import Logo from '../layout/Logo';
import TextBox from './TextBox';
import SearchButton from './SearchButton';

import { queryItems } from '../state/actions/itemActions';

// TODO: rremove
window.push = push;

class SearchBar extends Component {
  onSubmit = (fields) => {
    this.props.dispatch(queryItems(fields.queryText));
    this.props.dispatch(push("/results"));
  }

  render() {
    return (
      <form style={styles.container} onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Logo />
        <div style={styles.textBoxContainer}>
          <TextBox />
          <SearchButton />
        </div>
      </form>
    );
  }
}

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
};

// export default connect()(reduxForm({ form: 'SearchForm' })(SearchBar));
export default reduxForm({ form: 'SearchForm' })(SearchBar);
