export function joinWithSeparator(collection, separator) {
  return collection.reduce((accumulator, element) => {
    return accumulator === null ? [element] : [...accumulator, separator, element]
  }, null);
}
