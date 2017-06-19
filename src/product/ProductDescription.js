import React from 'react';
import Colors from '../constants/Colors';

const renderDescriptionBody = (description) => {
  if (description.html)
    return (
      <div
        style={styles.body}
        dangerouslySetInnerHTML={{ __html: description.html }}
      />
    );
  return <div style={styles.body}>{description.plain_text}</div>;
}

const ProductDescription = ({ description }) => (
  <div style={styles.container}>
    <h1 style={styles.header}>Descripción del producto</h1>
    {renderDescriptionBody(description)}
  </div>
);

const styles = {
  container: {
    textAlign: 'left',
    maxWidth: '650px',
  },
  header: {
    fontWeight: '300',
    fontSize: '28px',
    marginBottom: '32px',
  },
  body: {
    color: Colors.darkGray,
    fontWeight: '100',
    fontSize: '16px',
    margin: '0',
  },
};

export default ProductDescription;
