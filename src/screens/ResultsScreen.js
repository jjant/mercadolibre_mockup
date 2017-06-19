import React from 'react';
import { connect } from 'react-redux';
import Colors from '../constants/Colors';
import Product from '../results/Product';
import ProductCategory from '../product/ProductCategory';
import { joinWithSeparator } from '../misc/utils';

const renderProducts = (products) => {
  const separator = <hr style={styles.separator} />;
  const mappedProducts = products.map((product, index) => (
    <Product key={product.id} product={product} />
  ));
  return joinWithSeparator(mappedProducts, separator);
};

const ResultsScreen = ({ products }) => {
  // TODO: change later
  // const categories = products[0].categories;
  // const categories = ['a', 'b'];

  return (
    <div style={styles.container}>
      <div style={styles.productsContainer}>
        {renderProducts(products)}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: '1100px',
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

const mapStateToProps = (state) => ({
  products: state.item.items
});

export default connect(mapStateToProps)(ResultsScreen);
