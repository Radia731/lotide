const takeUntil = function(array, callback) {
  const takeArray = [];
  for (const data of array) {
    if (callback(data)) {
      break; // Stop processing loop if true
    } else {
      takeArray.push(data);
    }
  }
  return takeArray;
};

module.exports = takeUntil;