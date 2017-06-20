import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetail from '../product/ProductDetail';
import { queryItem, clearItem } from '../state/actions/itemActions';

class ProductDetailScreen extends Component {
  componentWillMount() {
    const id = this.props.location.pathname.split('/').slice(-1)[0];
    this.props.dispatch(queryItem(id));
  }

  componentWillUnmount() {
    this.props.dispatch(clearItem());
  }

  _productDetailProps = () => ({ product: this.props.product, loading: this.props.loading })

  render() {
    return (
      <ProductDetail {...this._productDetailProps()}/>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.item.currentItem,
  loading: state.item.loading,
  location: state.router.location,
});

export default connect(mapStateToProps)(ProductDetailScreen);
