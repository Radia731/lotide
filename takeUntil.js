const takeUntil = function (array, callback) {
  const takeArray = [];
  for (const data of array) {
    if (callback(data)) {
      break;
    } else {
      takeArray.push(data);
    }
  }
  return takeArray;
};

module.exports = takeUntil;
