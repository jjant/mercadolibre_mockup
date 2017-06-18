import React from 'react';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';

const mapCategoriesToComponents = (categories) => {
  const CategorySeparator = <span style={styles.separator}>></span>;
  return categories.map((category, index) => {
    if (index + 1 === categories.length)
      return <p key={category} style={{...styles.category, ...styles.lastCategory}}>{category}</p>
    return <p key={category} style={styles.category}>{category}</p>
  })
                   .reduce((prev, curr) => [prev, CategorySeparator, curr])
};

const ProductCategory = ({ categories }) => (
  <div style={styles.container}>
    {mapCategoriesToComponents(categories)}
  </div>
);

ProductCategory.propTypes = {
  categories: PropTypes.array.isRequired,
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    margin: '16px 0',
  },
  separator: {
    margin: '0 7px',
    fontSize: '12px',
    height: '18px',
    lineHeight: '18px',
    color: Colors.darkGray,
  },
  category: {
    margin: '0',
    color: Colors.darkGray,
  },
  lastCategory: {
    fontWeight: '700',
  },
};

export default ProductCategory;
