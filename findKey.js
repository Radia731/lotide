const findKey = (getObject, searchValue) => {
  const keys = Object.keys(getObject);

  for (const key of keys) {
    if (searchValue(getObject[key])) {
      return key;
    }
  }
};

module.exports = findKey;
