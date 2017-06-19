import React from 'react';
import { Link } from 'react-router-dom';
import Colors from '../constants/Colors';

const Product = ({ product, dispatch }) => {
  const { title, price, location, picture, id } = product;
  return (
    <Link style={styles.container} to={`/product/${id}`}>
      <img src={picture} style={styles.image} />
      <div style={styles.informationContainer}>
        <div style={styles.priceAndLocationContainer}>
          <p style={styles.price}>$ {price.amount}</p>
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
  location: {
    fontSize: '12px',
    color: Colors.darkGray,
    margin: '0',
  },
  title: {
    fontSize: '18px',
    margin: '0',
  },
};

export default Product;
