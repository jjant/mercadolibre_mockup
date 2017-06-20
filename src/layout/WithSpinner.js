import React from 'react';
import { branch, renderComponent } from 'recompose';
import Spinner from './Spinner';

const WithSpinner = (isLoading, spinnerProps = {}) => (
  branch(
    isLoading,
    renderComponent(() => <Spinner {...spinnerProps}/>),
  )
);

export default WithSpinner;
