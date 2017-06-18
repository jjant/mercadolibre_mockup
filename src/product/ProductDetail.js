import React from 'react';
import Colors from '../constants/Colors';
import ProductSummary from './ProductSummary';
import ProductCategory from './ProductCategory';
import SearchIcon from '../assets/ic_Search.png';
import Logo from '../assets/Logo_ML.png';

const ProductDetail = ({ product }) => {
  const { name, status, price, sellCount, description, categories } = product;
  return (
    <div style={styles.container}>
      <ProductCategory categories={categories} />
      <div style={styles.productContainer}>
        <div style={styles.findName}>
          <img
            src="http://mla-s2-p.mlstatic.com/581315-MLA25209135086_122016-O.jpg"
            style={styles.productImage}
          />
          <ProductSummary {...product}/>
        </div>
        <div style={styles.descriptionContainer}>
          <h1 style={styles.descriptionHeader}>
            Descripción del producto
          </h1>
          <p style={styles.descriptionBody}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  productContainer: {
    background: Colors.white,
    width: 'calc(100% - 64px)',
    padding: '32px',
    borderRadius: '3px',
  },
  findName: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  productImageContainer: {
    flex: '1',
  },
  productImage: {
    minWidth: '350px',
    width: '680px',
    alignSelf: 'center',
  },
  descriptionContainer: {
    textAlign: 'left',
    maxWidth: '650px',
  },
  descriptionHeader: {
    fontWeight: '300',
    fontSize: '28px',
    marginBottom: '32px',
  },
  descriptionBody: {
    color: Colors.darkGray,
    fontWeight: '100',
    fontSize: '16px',
    margin: '0',
  },
};

export default ProductDetail;
