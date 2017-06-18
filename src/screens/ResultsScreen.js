import React from 'react';
import Colors from '../constants/Colors';
import Product from '../results/Product';
import ProductCategory from '../product/ProductCategory';
import { joinWithSeparator } from '../misc/utils';

const renderProducts = (products) => {
  const separator = <hr style={styles.separator} />;
  const mappedProducts = products.map((product, index) => <Product key={product.name + index} product={product} />);
  return joinWithSeparator(mappedProducts, separator);
};

const ResultsScreen = ({ products }) => {
  const categories = products[0].categories;
  return (
    <div style={styles.container}>
      <ProductCategory categories={categories} />
      <div style={styles.productsContainer}>
        {renderProducts(products)}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: '1000px',
  },
  separator: {
    margin: '0',
    border: '0',
    borderBottom: `1px solid ${Colors.lightGray}`,
  },
  productsContainer: {
    background: Colors.white,
    borderRadius: '3px',
    padding: '0 16px',
  },
};

export default ResultsScreen;
