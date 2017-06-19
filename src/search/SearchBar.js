import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { push } from 'react-router-redux';
import { compose } from 'recompose';

import Colors from '../constants/Colors';
import Logo from '../layout/Logo';
import TextBox from './TextBox';
import SearchButton from './SearchButton';
import { queryParams } from '../misc/utils';

class SearchBar extends Component {
  componentWillMount() {
    this.props
  }

  onSubmit = (fields) => {
    this.props.dispatch(push(`/items?search=${fields.queryText}`));
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

const mapStateToProps = (state) => ({
  initialValues: {
    queryText: queryParams(state.router.location.search).get('search'),
  },
});

const enhance = compose(
  connect(mapStateToProps),
  reduxForm({ form: 'SearchForm' })
)

export default enhance(SearchBar);
