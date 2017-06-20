import React from 'react';
import { Link } from 'react-router-dom';
import Colors from '../constants/Colors';

import shippingIcon from '../assets/ic_shipping@2x.png.png';

const Product = ({ product, dispatch }) => {
  const { title, price, location, picture, id, free_shipping } = product;
  return (
    <Link style={styles.container} to={`/product/${id}`}>
      <img src={picture} style={styles.image} />
      <div style={styles.informationContainer}>
        <div style={styles.priceAndLocationContainer}>
          <p style={styles.price}>$ {price.amount}</p>
          {free_shipping ? <img src={shippingIcon} style={styles.freeShipping}/> : null}
          <p style={styles.location}>{location}</p>
        </div>
        <p style={styles.title}>{title}</p>
      </div>
    </Link>
  );
};

const styles = {
  container: {
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    padding: '16px 0',
    textDecoration: 'none',
  },
  image: {
    width: '180px',
    alignSelf: 'center',
    marginRight: '16px',
    borderRadius: '4px',
  },
  informationContainer: {
    textAlign: 'left',
    flex: '1',
    paddingRight: '32px',
  },
  priceAndLocationContainer: {
    margin: '16px 0 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: '24px',
    margin: '0',
  },
  freeShipping: {
    width: '24px',
    marginLeft: '16px',
  },
  location: {
    fontSize: '12px',
    color: Colors.darkGray,
    margin: '0 0 0 auto',
  },
  title: {
    fontSize: '18px',
    margin: '0',
  },
};

export default Product;
