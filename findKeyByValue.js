const findKeybyValue = function (getObject, searchValue) {
  const keys = Object.keys(getObject);

  for (const key of keys) {
    if (getObject[key] === searchValue) {

      return key;
    }
  }
};

module.exports = findKeybyValue;
