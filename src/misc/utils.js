import React from 'react';

export function joinWithSeparator(collection, separator) {
  return collection.reduce((accumulator, element, index) => {
    return accumulator === null ? [element] : [...accumulator, React.cloneElement(separator, { key: `separator-${index}` }), element]
  }, null);
}

export function queryParams(queryString) {
  return new URLSearchParams(queryString);
}
