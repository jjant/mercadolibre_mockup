import React from 'react';
import spinnerIcon from '../assets/spinner.svg';
import Colors from '../constants/Colors';

const Spinner = (props) => {
  const styles = props.styles || defaultStyles;
  return (
    <div style={styles.container}>
      <img src={spinnerIcon}/>
    </div>
  );
};

const defaultStyles = {
  container: {
    maxWidth: '1100px',
    height: '500px',
    background: Colors.white,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
  },
};

export default Spinner;
