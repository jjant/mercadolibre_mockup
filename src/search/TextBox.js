import React from 'react';
import { Field } from 'redux-form';

import Colors from '../constants/Colors';

const TextBox = () => (
  <Field
    style={styles.textBox}
    component="input"
    name="queryText"
    type="text"
    placeholder="Nunca dejes de buscar"
  />
);

const styles = {
  textBox: {
    fontSize: '18px',
    height: '40px',
    width: '100%',
    maxWidth: '800px',
    padding: '0 10px',
    border: '0',
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
    border: `1px solid ${Colors.darkGray}`,
  },
};

export default TextBox;
