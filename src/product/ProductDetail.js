import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Colors from '../constants/Colors';
import ProductSummary from './ProductSummary';
import ProductCategory from './ProductCategory';
import ProductDescription from './ProductDescription';
import SearchIcon from '../assets/ic_Search.png';
import WithSpinner from '../layout/WithSpinner';

const ProductDetail = ({ product, loading }) => {
  if (product === null) return null;
  const { description, categories, picture, ...productSummaryProps } = product;
  return (
    <div style={styles.container}>
      <ProductCategory categories={categories} />
      <div style={styles.productContainer}>
        <div style={styles.findName}>
          <img src={picture} style={styles.productImage}/>
          <ProductSummary {...productSummaryProps}/>
        </div>
        <ProductDescription description={description}/>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1100px',
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
};

const enhance = compose(
  WithSpinner(({ loading }) => loading)
);

export default enhance(ProductDetail);
