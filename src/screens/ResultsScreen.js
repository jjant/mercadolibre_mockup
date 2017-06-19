import React from 'react';
import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';
import Colors from '../constants/Colors';
import Product from '../results/Product';
import ProductCategory from '../product/ProductCategory';
import { joinWithSeparator } from '../misc/utils';
import { queryItems, clearItems } from '../state/actions/itemActions';

const renderProducts = (products) => {
  const separator = <hr style={styles.separator} />;
  const mappedProducts = products.map((product, index) => (
    <Product key={product.id} product={product} />
  ));
  return joinWithSeparator(mappedProducts, separator);
};

const ResultsScreen = ({ products, dispatch }) => {
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
  products: state.item.items,
  location: state.router.location,
});

const enhance = compose(
  connect(mapStateToProps),

  lifecycle({
    componentWillMount() {
      const queryText = new URLSearchParams(this.props.location.search).get('search');
      this.props.dispatch(queryItems(queryText));
    },
    componentWillUnmount() {
      this.props.dispatch(clearItems());
    },
    componentWillUpdate(nextProps) {
      if (this.props.location.search === nextProps.location.search)
        return;
      const queryText = new URLSearchParams(nextProps.location.search).get('search');
      this.props.dispatch(queryItems(queryText));
    },
  })
);

export default enhance(ResultsScreen);
