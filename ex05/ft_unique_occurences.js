function hasUniqueValues(arr) {
  let values = {};
  for (let i = 0; i < arr.length; i++) {
    if (values[arr[i]]) {
      return false;
    }
    values[arr[i]] = true;
  }
  return true;
}

const numbers = [3, 5, 2, 8, 10, 6];
console.log(hasUniqueValues(numbers)); // Output: true

const duplicates = [3, 5, 2, 8, 10, 6, 5, 2];
console.log(hasUniqueValues(duplicates)); // Output: false