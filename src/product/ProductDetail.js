import React, { Component } from 'react';
import { connect } from 'react-redux';
import Colors from '../constants/Colors';
import ProductSummary from './ProductSummary';
import ProductCategory from './ProductCategory';
import ProductDescription from './ProductDescription';
import SearchIcon from '../assets/ic_Search.png';
import { queryItem } from '../state/actions/itemActions';

class ProductDetail extends Component {
  componentWillMount() {
    const id = this.props.location.pathname.split('/').slice(-1)[0];
    this.props.dispatch(queryItem(id));
  }

  render() {
    if (this.props.product === null) return null;
    const { description, categories, picture, ...productSummary } = this.props.product;
    return (
      <div style={styles.container}>
        <ProductCategory categories={categories} />
        <div style={styles.productContainer}>
          <div style={styles.findName}>
            <img
              src={picture}
              style={styles.productImage}
            />
            <ProductSummary {...productSummary}/>
          </div>
          <ProductDescription description={description}/>
        </div>
      </div>
    );
  }
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

const mapStateToProps = (state) => ({
  product: state.item.currentItem,
  location: state.router.location,
});

export default connect(mapStateToProps)(ProductDetail);
