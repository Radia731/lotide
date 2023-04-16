const findKeybyValue = function(getObject, searchValue) {
  // Load all the keys value into var keys
  const keys = Object.keys(getObject);

  for (const key of keys) {
    if (getObject[key] === searchValue) {
      // If the key match searchValue as string
      return key;
    }
  }
};

module.exports = findKeybyValue;