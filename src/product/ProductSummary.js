import React from 'react';
import Colors from '../constants/Colors';

const renderSellCount = (sellCount) => {
  if (sellCount === 0)
    return null;
  if (sellCount === 1)
    return <span> - {sellCount} vendido</span>;
  if (sellCount > 1)
    return <span> - {sellCount} vendidos</span>;
};

const ProductSummary = ({ title, status, sellCount, price }) => (
  <div style={styles.container}>
    <p style={styles.status}>
      <span>{status}</span>
      {renderSellCount(sellCount)}
    </p>
    <h1 style={styles.title}>{title}</h1>
    <h1 style={styles.price}>$ {price.amount}</h1>
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
  title: {
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
    width: '250px',
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
