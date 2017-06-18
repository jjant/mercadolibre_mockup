import React from 'react';
import Colors from '../constants/Colors';

const ProductSummary = ({ name, status, sellCount, price }) => (
  <div style={styles.container}>
    <p style={styles.status}>
      <span>{status}</span>
      {sellCount > 0 ? <span> - {sellCount} vendidos</span> : null}
    </p>
    <h1 style={styles.name}>{name}</h1>
    <h1 style={styles.price}>$ {price}</h1>
    <button style={styles.buyButton}>Comprar</button>
  </div>
)

const styles = {
  container: {
    maxWidth: '250px',
  },
  status: {
    fontSize: '14px',
    marginBottom: '16px',
    color: Colors.darkGray,
    textAlign: 'left',
  },
  name: {
    fontSize: '24px',
    margin: '0',
    textAlign: 'left',
  },
  price: {
    fontSize: '46px',
    fontWeight: '300',
    margin: '32px 0',
    textAlign: 'left',
  },
  buyButton: {
    width: '100%',
    height: '40px',
    fontSize: '16px',
    fontWeight: '300',
    cursor: 'pointer',
    color: Colors.white,
    background: Colors.blue,
    border: '0',
    borderRadius: '2px',
  }
};

export default ProductSummary;
