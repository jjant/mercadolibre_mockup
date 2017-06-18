import React from 'react';
import Colors from '../constants/Colors';

const Product = ({ product }) => {
  const { name, price, location, imageUrl } = product;
  return (
    <div style={styles.container}>
      <img src={imageUrl} style={styles.image} />
      <div style={styles.informationContainer}>
        <div style={styles.priceAndLocationContainer}>
          <p style={styles.price}>$ {price}</p>
          <p style={styles.location}>{location}</p>
        </div>
        <p style={styles.title}>{name}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    padding: '16px 0',
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
